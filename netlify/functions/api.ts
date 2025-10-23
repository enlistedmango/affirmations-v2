import { handle } from 'hono/netlify'
import { app } from '../../server/src/app'

// Export Netlify-compatible handler
export const handler = handle(app)