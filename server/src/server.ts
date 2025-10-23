import { serve } from '@hono/node-server'
import { app } from './app'
import { setData } from './data'

const port = Number(process.env.PORT || 8787)

async function hydrateFromRemote() {
    const url = 'https://raw.githubusercontent.com/enlistedmango/affirmations-api/main/src/data.ts'
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`status ${res.status}`)
        let s = await res.text()
        // Remove TS types and convert export to const
        s = s.replace(/export\s+type[\s\S]*?;\s*/g, '')
        s = s.replace(/export\s+const\s+AFFIRMATIONS\s*:\s*[^=]+=/, 'const AFFIRMATIONS =')
        // Evaluate safely in a sandboxed Function; we only return data
        // eslint-disable-next-line no-new-func
        const list = new Function(`${s}; return AFFIRMATIONS;`)()
        if (Array.isArray(list)) {
            setData(list)
            console.log(`[api] Loaded ${list.length} affirmations from v1 dataset`)
        }
    } catch (err) {
        console.warn('[api] Using built-in sample dataset (could not fetch remote):', err)
    }
}

hydrateFromRemote().finally(() => {
    console.log(`Affirmations API running on http://localhost:${port}`)
    serve({ fetch: app.fetch, port })
})
