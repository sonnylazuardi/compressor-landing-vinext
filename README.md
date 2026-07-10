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

```bash
npx wrangler login
npx wrangler deploy
```

`wrangler.jsonc` runs `npm run build` (vinext/Vite), then uploads the prebuilt
Worker from `dist/server` with `no_bundle`. That matches Cloudflare Workers
Builds when the deploy command is the default `npx wrangler deploy`.

Do **not** select a Next.js / OpenNext framework preset.

## Production checks

```bash
npm test
```

The test command creates the production build and verifies the rendered page,
download URLs, and social metadata.
