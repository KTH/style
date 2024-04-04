// @ts-check
import { describe, it } from "node:test";
import { lstat, readdir } from "node:fs/promises";
import * as sass from "sass";
import process from "node:process";
import path from "node:path";

const ROOT_DIR = new URL("../scss/", import.meta.url);

/**
 * List all files in a directory, relative to "../scss" directory
 * @param {string} dir
 * @return {Promise<string[]>}
 */
async function listAllFiles(dir) {
  const files = [];
  for (const file of await readdir(new URL(dir))) {
    const stat = await lstat(new URL(`${dir}${file}`));

    if (file.endsWith(".scss")) {
      files.push(`${file}`);
    } else if (stat.isDirectory()) {
      for (const file2 of await listAllFiles(`${dir}${file}/`)) {
        files.push(`${file}/${file2}`);
      }
    }
  }
  return files;
}

describe("Compile all SCSS files", async () => {
  for (const file of await listAllFiles(ROOT_DIR.toString())) {
    // `sass.compile` command requires paths relative to `cwd`
    const absolutePath = new URL(
      `../scss/${file}`,
      import.meta.url,
    ).pathname.toString();
    const relativePath = path.relative(process.cwd(), absolutePath);

    it(`compiles '${file}'`, () => {
      sass.compile(`${relativePath}`);
    });
  }
});
