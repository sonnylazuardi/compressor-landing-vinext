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

This is a **vinext** app (output in `dist/`), not OpenNext / `.next`.

### Local deploy

```bash
npx wrangler login
npm run deploy
```

### Cloudflare Workers Builds (GitHub)

`wrangler.jsonc` runs `npm run build` before deploy, so the default
dashboard command works:

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

Do **not** select a Next.js / OpenNext framework preset.

## Production checks

```bash
npm test
```

The test command creates the production build and verifies the rendered page,
download URLs, and social metadata.
