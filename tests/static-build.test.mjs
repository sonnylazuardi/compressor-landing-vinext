import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const html = readFileSync(join(dist, "index.html"), "utf8");
const assetsDir = join(dist, "assets");
const bundle = readdirSync(assetsDir)
  .filter((name) => name.endsWith(".js"))
  .map((name) => readFileSync(join(assetsDir, name), "utf8"))
  .join("\n");
const output = `${html}\n${bundle}`;

test("builds a static Compressor landing page", () => {
  assert.match(html, /<title>Compressor \| Smaller images, locally<\/title>/i);
  assert.match(html, /property="og:image"/);
  assert.match(html, /\/og\.png/);
  assert.match(output, /Private\. Native\. Smaller images\. Same good taste\./);
  assert.match(output, /Download for Mac/);
  assert.match(output, /Download for Windows/);
  assert.match(output, /Your images stay local/);
  assert.match(output, /Make every image lighter\./);
  assert.match(
    output,
    /releases\/download\/v0\.1\.2\/Compressor-macos-arm64\.zip/,
  );
  assert.match(
    output,
    /releases\/download\/v0\.1\.2\/Compressor-windows-x64\.zip/,
  );
});
