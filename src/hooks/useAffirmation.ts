import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Affirmation } from '../types'
import { fetchRandomAffirmation } from '../lib/api'
import { randomFallback } from '../data/fallback'

export type UseAffirmationOptions = {
    tag?: string
    lang?: string
    autoplay?: boolean
    intervalMs?: number
}

export function useAffirmation(options?: UseAffirmationOptions) {
    const { tag, lang, autoplay = false, intervalMs = 0 } = options || {}
    const [data, setData] = useState<Affirmation | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const abortRef = useRef<AbortController | null>(null)

    const canAutoplay = autoplay && intervalMs >= 3000 // be kind to API and users

    const load = useCallback(async () => {
        setLoading(true)
        setError(null)

        abortRef.current?.abort()
        const controller = new AbortController()
        abortRef.current = controller
        try {
            const next = await fetchRandomAffirmation({ tag, lang, signal: controller.signal })
            setData(next)
        } catch (e) {
            // Stay graceful and quiet in the UI; log for devs
            // eslint-disable-next-line no-console
            console.warn('[affirmations] fetch failed, using fallback:', e)
            setError(null)
            setData(randomFallback())
        } finally {
            setLoading(false)
        }
    }, [tag, lang])

    useEffect(() => {
        // initial load
        load()
        return () => abortRef.current?.abort()
    }, [load])

    useEffect(() => {
        if (!canAutoplay) return
        const id = setInterval(load, intervalMs)
        return () => clearInterval(id)
    }, [canAutoplay, intervalMs, load])

    const helpers = useMemo(() => ({
        copy: async () => {
            if (!data) return false
            try {
                await navigator.clipboard.writeText(data.text)
                return true
            } catch {
                return false
            }
        },
        share: async () => {
            if (!data) return false
            if (navigator.share) {
                try {
                    await navigator.share({ title: 'Affirmation', text: data.text })
                    return true
                } catch {
                    return false
                }
            }
            return false
        },
    }), [data])

    return { data, loading, error, reload: load, ...helpers }
}
