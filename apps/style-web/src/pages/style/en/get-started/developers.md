# Get started with @kth/style package

This guide assumes that you have an application with a toolchain ready to write HTML, Sass and JavaScript code.

## Install

Install `@kth/style` with npm

```
npm i @kth/style
```

## Serve the font and images

KTH Style includes static assets (logotypes, typography). You can:

- route a path in your app to the `node_modules/@kth/style/assets` directory.
- copy the `assets` directory and serve it yourself

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

### Method 2. Copy the assets and serve them yourself

Copy the directory `/node_modules/@kth/style/assets` somewhere and route requests to such directory

## Import the Figtree font family

Add the following line in the **top** of the Sass file in your project:

```scss
@import url("<<PATH_TO_YOUR_ASSETS_DIRECTORY>/fonts.css");
```

<details>
<summary>Troubleshooting</summary>

In this section we will inclued the most common problems when importing both CSS and Sass files into a project.

</details>
