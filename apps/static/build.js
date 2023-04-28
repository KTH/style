/**
 * Builds:
 * - `open-sans.css` (and its fonts)
 * - `reset.scss`
 */
const postcss = require("postcss");
const postcssUrl = require("postcss-url");
const sass = require("sass");
const fs = require("fs/promises");
const path = require("path");
const XXH = require("xxhashjs");

// `open-sans.css` and its dependencies
async function openSans() {
  const css = await fs.readFile("src/open-sans.css", "utf-8");
  const output = await postcss()
    .use(
      postcssUrl({
        filter: "**/*",
        url: "copy",
        basePath: path.resolve(__dirname, "./src"),
        assetsPath: "open-sans",
        useHash: true,
      })
    )
    .process(css, { from: "src/open-sans.css", to: "dist/open-sans.css" });

  const hash = XXH.h32(output.css, 0).toString(16).slice(0, 8);

  fs.writeFile(`./dist/open-sans.${hash}.css`, output.css);
}

// Regular Sass to CSS file
async function sassToCss(input) {
  const compiledCSS = sass.compile(`src/${input}.scss`, {
    loadPaths: ["../../node_modules"],
  });

  const output = await postcss().process(compiledCSS.css, {
    from: input,
    to: "dist/reset.css",
  });

  const hash = XXH.h32(output.css, 0).toString(16).slice(0, 8);
  fs.writeFile(`./dist/${input}.${hash}.css`, output.css);
}

openSans();
sassToCss("reset");
