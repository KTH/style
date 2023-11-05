/**
 * Generate a Sass file in `tokens/icons-raw.scss` from `icons` library
 */

// @ts-check
import { optimize } from "svgo";
import { readdir, readFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";

/** @type {import("svgo").Config} */
const config = {
  datauri: "enc",
  plugins: ["preset-default"],
};

/**
 * Returns an optimized SVG from a non-optimized one
 * @param {string} originalSvg
 */
function optimizeSvg(originalSvg) {
  return optimize(originalSvg, config);
}

const iconsPath = new URL("../icons/figma/", import.meta.url);
const outputFile = new URL("../scss/tokens/icons-raw.scss", import.meta.url);

const writer = createWriteStream(outputFile);
await new Promise((resolve) => writer.on("open", resolve));

writer.write("@mixin icons {\n");

for (const fileName of await readdir(iconsPath)) {
  const fileContent = await readFile(new URL(fileName, iconsPath), {
    encoding: "utf-8",
  });

  const svg = optimizeSvg(fileContent);

  writer.write(`  --icon-${fileName.slice(0, -4)}: url("${svg.data}");\n`);
}
writer.write("}\n");
writer.end();

await new Promise((resolve) => writer.on("finish", resolve));
