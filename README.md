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

This is a **vinext** app, not OpenNext. Do not use `npx wrangler deploy` alone
in the Cloudflare dashboard — that auto-detects Next.js and breaks the build.

### One-time local deploy

```bash
npx wrangler login
npm run deploy
```

### Cloudflare Workers Builds (GitHub)

In the Worker’s **Settings → Build**:

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npm run deploy` |
| Root directory | `/` |

Do **not** select a Next.js / OpenNext framework preset. Output is `dist/`,
not `.next/`.

## Production checks

```bash
npm test
```

The test command creates the production build and verifies the rendered page,
download URLs, and social metadata.
