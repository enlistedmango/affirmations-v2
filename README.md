# Affirmations — V2

Pastel, minimal UI for the Affirmations API.

• Centered card with smooth animations and soft gradients
• Copy and Share buttons
• Clean TypeScript + React + Vite setup

## Development

1. Install deps

```
npm install
```

2. Configure the API base (optional)

Set `VITE_API_BASE_URL` to your API origin. Examples:

```
# .env.local
VITE_API_BASE_URL=http://localhost:8787
```

If not set, the app will try Netlify Functions at `/.netlify/functions/api` (when deployed on Netlify),
and use a Vite dev proxy at `/api` during local dev (proxied to `http://localhost:8787`).

If the API is not running, the UI will gracefully show a local sample affirmation so you can still explore the UI.

3. Start both servers (UI + API) in dev

```
npm run dev:all
```

This runs:

- UI at http://localhost:5173
- Local API at http://localhost:8787 (proxied to the UI at /api)

Alternatively, you can run them separately:

```
npm run dev        # UI only
npm run dev:server # API only (Hono on :8787)
```

## API

This UI targets the V1 endpoints from https://github.com/enlistedmango/affirmations-api:

- GET `/v1/affirmation` — single random affirmation (supports `tag` and `lang`)

## Notes

- Animations are CSS-based for minimal dependencies.
- Colors are pastel and accessible; prefers reduced motion respected by the browser.
- Local API is implemented with Hono and CORS enabled. Sampling is without replacement; filters fall back to full dataset if empty.
