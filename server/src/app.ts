import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { getData, filter, sampleMany, sampleOne } from './data'

const app = new Hono()

app.use('*', cors())

app.get('/', (c: any) => c.json({ name: 'Affirmations API (v2-local)', version: '0.1.0' }))

app.get('/v1/affirmation', (c: any) => {
    const tag = c.req.query('tag') || undefined
    const lang = c.req.query('lang') || undefined
    const list = filter(getData(), tag, lang)
    const item = sampleOne(list)
    c.header('Cache-Control', 'no-store')
    return c.json(item)
})

app.get('/v1/affirmations', (c: any) => {
    const tag = c.req.query('tag') || undefined
    const lang = c.req.query('lang') || undefined
    const limitStr = c.req.query('limit')
    let limit = parseInt(limitStr || '1', 10)
    if (Number.isNaN(limit)) limit = 1
    limit = Math.max(1, Math.min(limit, 100))
    const out = sampleMany(filter(getData(), tag, lang), limit)
    c.header('Cache-Control', 'public, max-age=30')
    return c.json(out)
})

app.get('/v1/affirmations/:id', (c: any) => {
    const id = c.req.param('id')
    const found = getData().find(a => a.id === id)
    if (!found) return c.json({ message: 'Not found' }, 404)
    c.header('Cache-Control', 'public, max-age=300')
    return c.json(found)
})

export { app }
