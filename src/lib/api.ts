import type { Affirmation } from '../types'

// Build the base URL for the API. Prefer environment variable when provided.
// If none provided, try Netlify Functions path; and finally fallback to localhost dev.
const ENV_BASE = import.meta.env.VITE_API_BASE_URL as string | undefined

function resolveEndpoint(path: string): string {
    if (ENV_BASE && ENV_BASE.trim()) return `${ENV_BASE.replace(/\/$/, '')}${path}`

    // If running on Netlify site with functions, the function path should exist.
    if (typeof window !== 'undefined' && window.location.hostname.endsWith('netlify.app')) {
        return `/.netlify/functions/api${path}`
    }

    // Local dev: use Vite proxy (/api -> http://localhost:8787)
    return `/api${path}`
}

export async function fetchRandomAffirmation(opts?: { tag?: string; lang?: string; signal?: AbortSignal }): Promise<Affirmation> {
    const params = new URLSearchParams()
    if (opts?.tag) params.set('tag', opts.tag)
    if (opts?.lang) params.set('lang', opts.lang)

    const url = resolveEndpoint(`/v1/affirmation${params.size ? `?${params.toString()}` : ''}`)

    const res = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        signal: opts?.signal,
    })

    if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`API error ${res.status}: ${text || res.statusText}`)
    }

    const data = (await res.json()) as Affirmation
    // Basic validation
    if (!data || typeof data.text !== 'string') {
        throw new Error('Malformed API response')
    }
    return data
}
