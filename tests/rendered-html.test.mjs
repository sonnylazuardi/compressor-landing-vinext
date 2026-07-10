import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://compressor.example/", {
      headers: {
        accept: "text/html",
        host: "compressor.example",
        "x-forwarded-host": "compressor.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Compressor landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Compressor \| Smaller images, locally<\/title>/i);
  assert.match(html, /Private\. Native\. Smaller images\. Same good taste\./);
  assert.match(html, /Download for Mac/);
  assert.match(html, /Download for Windows/);
  assert.match(html, /Your images stay local/);
  assert.match(html, /Make every image lighter\./);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("renders real release links and social metadata", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /releases\/download\/v0\.1\.2\/Compressor-macos-arm64\.zip/,
  );
  assert.match(
    html,
    /releases\/download\/v0\.1\.2\/Compressor-windows-x64\.zip/,
  );
  assert.match(html, /property="og:image"/);
  assert.match(html, /https:\/\/compressor\.example\/og\.png/);
});
