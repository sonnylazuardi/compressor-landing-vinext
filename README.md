# Compressor landing page

The marketing site for Compressor, a native image compression app for macOS
and Windows.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Cloudflare Workers

This is a **vinext** app. Vite must build the Worker before Wrangler deploys it.
Do not put a `build.command` in `wrangler.jsonc` — that breaks Vite virtual modules.

### Local deploy

```bash
npx wrangler login
npm run deploy
```

### Cloudflare Workers Builds (GitHub)

In the Worker → **Settings → Build**, set:

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npm run deploy` |
| Root directory | `/` |

`npm run deploy` runs `vinext build` then `wrangler deploy` (uses the
prebuilt Worker in `dist/`, not a second Wrangler bundle of source).

Do **not** use bare `npx wrangler deploy` and do **not** select a Next.js /
OpenNext framework preset.

## Production checks

```bash
npm test
```

The test command creates the production build and verifies the rendered page,
download URLs, and social metadata.
