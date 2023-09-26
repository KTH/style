# Get started with @kth/style package

This guide assumes that you have an application with a toolchain ready to write HTML, Sass and JavaScript code.

## Install

Install `@kth/style` with npm

```
npm i @kth/style
```

## Serve the font and images

KTH Style includes static assets (logotypes, typography). You can:

- Route a path to assets directory.
- Serve the assets yourself

### Method 1. Route a path to assets directory

Set up your routing so that requests in `<YOUR_APP>/assets` are served from `/node_modules/@kth/style/assets`.

Example in express.js

```ts
import express from "express";
import fs from "node:fs/promises";

const app = express();

// Note: adapt this line to your needs
const kthStyleAssets = new URL(
  "../node_modules/@kth/style/assets",
  import.meta.url,
);
app.use("/<<YOUR_APP>>/assets", express.static(kthStyleAssets));
```

Read more in the [Express documentation](https://expressjs.com/en/starter/static-files.html)

### Method 2. Serve the assets yourself

1. Copy the files in `/node_modules/@kth/style/assets` to a custom directory.
2. Make sure there is a public URL to access to the files in the directory you have copied

## Import the Figtree font family

You can import the Figtree using the HTML `<link>` tag or CSS `@import` rule.

```html
<link rel="stylesheet" href="/<YOUR_APP>/assets/fonts.css" />
```

```scss
@import url("/<YOUR_APP>/assets/fonts.css");
```

> [Note!]
> Some tools rewrite URLs when using `@import` statements. If you have any problem, contact us so we can add troubleshooting information

<details>
<summary>Troubleshooting</summary>

In this section we will include the most common problems when importing both CSS and Sass files into a project.

</details>
