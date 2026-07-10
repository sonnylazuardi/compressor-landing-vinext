# Compressor landing page

Static marketing site for Compressor, a native image compression app for macOS
and Windows. Built with Vite + React + TypeScript and deployed as Cloudflare
Workers static assets.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Deploy to Cloudflare Workers

```bash
npx wrangler login
npm run deploy
```

`npm run deploy` builds the static site into `dist/`, then uploads it with
Wrangler (`assets.directory: ./dist`).

### Cloudflare Workers Builds (GitHub)

In the Worker → **Settings → Build**, either:

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npm run deploy` |

or keep the default deploy command:

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npx wrangler deploy` |

`wrangler.jsonc` runs `npm run build` before upload, so both work.

Worker name in the dashboard must match `name` in `wrangler.jsonc`
(`compressor-landing-vinext`).

Do **not** select a Next.js / OpenNext / vinext framework preset.

## Production checks

```bash
npm test
```
