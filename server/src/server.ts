import { serve } from '@hono/node-server'
import { app } from './app'
import { setData } from './data'

const port = Number(process.env.PORT || 8787)

async function hydrateFromRemote() {
    const url = 'https://raw.githubusercontent.com/enlistedmango/affirmations-api/main/src/data.ts'
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`status ${res.status}`)
        const s = await res.text()
        // Extract the array literal assigned to AFFIRMATIONS to avoid TS syntax
        const match = s.match(/export\s+const\s+AFFIRMATIONS[\s\S]*?=\s*(\[[\s\S]*?\]);/)
        if (!match) throw new Error('AFFIRMATIONS array not found in remote file')
        let arrayCode = match[1]
        // Strip TS-specific tokens that break evaluation
        arrayCode = arrayCode.replace(/\sas\s+const/g, '')
        // Evaluate only the array literal
        const list = new Function(`return (${arrayCode});`)()
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
