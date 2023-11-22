/** Checks that all pages are translated */

// @ts-check
import { lstat, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import matter from "gray-matter";
import { readFileSync } from "node:fs";
import { argv } from "node:process";

const CONTENT = `---
title: KTH Style
layout: "@layouts/Page.astro"
original: false
status: "empty"
---
`;
const ROOT_DIR = new URL("../src/pages/", import.meta.url);
const directories = {
  en: "style/en/",
  sv: "style/sv/",
};

const fix = argv[2] === "fix";

await traverseDirectories(fix, ...Object.values(directories));

/**
 * List all files in a directory. Return a map that contains the filename
 * relative to `dir` and a boolean indicating if its a directory
 *
 * @param {string} dir
 * @return {Promise<Map<string, boolean>>}
 */
async function listAllFiles(dir) {
  /** @type {Map<string, boolean>} */
  const files = new Map();

  for (const file of await readdir(new URL(dir, ROOT_DIR))) {
    const stat = await lstat(new URL(`${dir}${file}`, ROOT_DIR));

    if (stat.isDirectory()) {
      files.set(file, true);

      for (const [file2, isDirectory] of await listAllFiles(`${dir}${file}/`)) {
        files.set(`${file}/${file2}`, isDirectory);
      }
    } else {
      files.set(file, false);
    }
  }

  return files;
}

/**
 * Checks that `fileContent` is original
 * @param {string} fileContent The content of a markdown file
 */
function isOriginal(fileContent) {
  const frontMatter = matter(fileContent);

  return (
    frontMatter.data.original === undefined ||
    frontMatter.data.original === true
  );
}

/** @param {string} path */
function fileExists(path) {
  return lstat(new URL(path, ROOT_DIR))
    .then(() => true)
    .catch(() => false);
}

/**
 * @param {boolean} fix
 * @param {string[]} dirs */
async function traverseDirectories(fix, ...dirs) {
  // List every content in all `dirs`
  /** @type {Map<string, boolean>} */
  const allFiles = new Map();

  for (const dir of dirs) {
    for (const [file, isDirectory] of await listAllFiles(dir)) {
      if (!file.includes("examples")) {
        allFiles.set(file, isDirectory);
      }
    }
  }

  // 1. Files must exist in all directories
  let valid = true;
  for (const dir of dirs) {
    for (const [file, isDirectory] of Array.from(allFiles).sort()) {
      if (!(await fileExists(`${dir}${file}`))) {
        const path = new URL(`${dir}${file}`, ROOT_DIR);

        if (fix && isDirectory) {
          await mkdir(path, { recursive: true });
        } else if (fix) {
          await writeFile(path, CONTENT, { flag: "w+" });
        } else {
          console.warn(`Missing ${dir}${file}`);

          valid = false;
        }
      }
    }
  }

  if (!valid) {
    console.warn();
    console.warn(`You can fix the problems above with the 'fix' flag`);
    process.exit(1);
  }

  // 2. Files must be "original" in exactly one of the directories
  for (const [file, isDirectory] of Array.from(allFiles).sort()) {
    if (!isDirectory) {
      const originals = dirs
        .map((dir) => `${dir}${file}`)
        .filter((p) => {
          const url = new URL(p, ROOT_DIR);
          const content = readFileSync(url, { encoding: "utf-8" });

          return isOriginal(content);
        });

      if (originals.length === 0) {
        console.warn(`Error. Neither of "${file}" is marked as original`);
        process.exit(1);
      }

      if (originals.length > 1) {
        const list = originals.map((o) => `- ${o}`).join("\n");
        console.warn(
          `Error. Only one of those files should be marked as original:\n${list}`,
        );
        process.exit(1);
      }
    }
  }
}
