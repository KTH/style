---
layout: "@layouts/Page.astro"
title: "Get started with @kth/style package"
---

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

Once you have set up your app, you can import the fonts:

<details>
<summary>Code</summary>
<div>

```html
<link rel="stylesheet" href="/<YOUR_ASSETS_DIRECTORY>/fonts.css" />
```

```scss
@import url("/<YOUR_ASSETS_DIRECTORY>/fonts.css");
```

</div>
</details>

### Method 2. Serve the assets yourself

> [!Note]
> If you choose this method, you are responsible for keeping the assets updated

1. Copy the files in `/node_modules/@kth/style/assets` to a custom directory.
2. Make sure there is a public URL to access to the files in the directory you have copied

You can import the fonts by importing the `fonts.css` in the assets directory. Depending on the build tools in your app, you might need to adapt the `fonts.css` file.
