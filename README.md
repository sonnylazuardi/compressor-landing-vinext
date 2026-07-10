# Compressor landing page

The marketing site for Compressor, a native image compression app for macOS
and Windows. Built with [vinext](https://github.com/cloudflare/vinext) on
Cloudflare Workers.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Cloudflare Workers

Follows the official [@cloudflare/vite-plugin](https://developers.cloudflare.com/workers/vite-plugin/get-started/)
flow used by [vinext's App Router example](https://github.com/cloudflare/vinext/tree/main/examples/app-router-cloudflare):

1. `wrangler.jsonc` points at the **source** Worker (`./worker/index.ts`)
2. `vinext build` emits `dist/server/wrangler.json` (RSC manifest, SSR modules, assets)
3. `wrangler deploy` automatically uses that output via `.wrangler/deploy/config.json`

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

Do **not** select a Next.js / OpenNext framework preset. Do **not** put
`build.command` or `main: dist/server/...` in `wrangler.jsonc` — that bypasses
the Vite plugin deploy snapshot and drops `__vite_rsc_assets_manifest.js`.

## Production checks

```bash
npm test
```

The test command creates the production build and verifies the rendered page,
download URLs, and social metadata.
