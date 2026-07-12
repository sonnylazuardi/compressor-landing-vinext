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
  assert.match(output, /github\.com\/sonnylazuardi\/compressor\/releases\/latest/);
  assert.match(output, /github\.com\/sonnylazuardi\/compressor"/);
  assert.match(
    readFileSync(join(dist, "_redirects"), "utf8"),
    /\/\* +\/index\.html +200/,
  );
});
