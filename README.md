# Compressor landing page

Static marketing site for Compressor, a native image compression app for macOS
and Windows. Built with Vite + React + TypeScript and deployed on
[Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Deploy to Cloudflare Pages

Migrated from Workers static assets. Build output is `dist/`
(`pages_build_output_dir` in `wrangler.jsonc`).

### CLI

```bash
npx wrangler login
npm run deploy
```

### Git (dashboard)

1. [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → **Create** → **Pages** → **Connect to Git**
2. Select this repository
3. Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

4. Deploy. You’ll get a `*.pages.dev` URL.

### Custom domain (DNS can stay on Rumahweb)

1. Pages project → **Custom domains** → add `compressor.sonnylab.com`
2. On Rumahweb, create a **CNAME**:
   - Name: `compressor`
   - Target: `compressor-landing.pages.dev` (use the host Cloudflare shows)
3. Wait for DNS + SSL

### Clean up the old Worker

Per [Cloudflare’s migration guide](https://developers.cloudflare.com/pages/migrations/migrating-from-workers/):

1. Remove `compressor.sonnylab.com` from the old Worker (Domains & Routes)
2. Delete the old Worker (`compressor-landing-vinext`) once Pages is live
3. Point the custom domain at the Pages project only

## Production checks

```bash
npm test
```
