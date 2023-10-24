---
layout: "@layouts/Page.astro"
title: "Get started with @kth/style package"
---

# Get started with @kth/style package

## Pre-requirements

The `@kth/style` package can be installed in apps with:

- Posibility to import Sass files
- Install tools via npm

Steps to follow are:

1. Install the package
2. Include a component in your app
3. Serve the static assets (font and images)

## Step 1. Install the package

Install `@kth/style` with npm

```
npm i @kth/style
```

## Step 2. Include a component in your app

Go to any html page and copy the following code:

> [!Note] If you use React, replace `class` with `className`

```html
<button class="kth-button primary">Hello from KTH Style</button>
```

In a Sass file that will style the page where you put the button, copy the following code on top of the page:

```scss
@use "@kth/style/scss/utils/reset";
@use "@kth/style/scss/components/button";
```

If everything is ok, you should see a button like this one:

<iframe src="/style/en/examples/button/default"></iframe>

> [!Note] At this point, you might see fonts incorrectly, which is something will be fixed in the next steps

## Step 3. Serve the font and images

KTH Style includes static assets (logotypes, typography) that needs to be served to users. You can use one of the three methods:

1. Serve static assets from KTH Style CDN (recommended)
2. Route a path to assets directory.
3. Copy the assets and serve them yourself

### Method 1. Serve static assets from KTH Style CDN

TODO

### Method 2. Route a path to assets directory

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

### Method 3. Serve the assets yourself

1. Copy the files in `/node_modules/@kth/style/assets` to a custom directory.
2. Make sure there is a public URL to access to the files in the directory you have copied

## Step 4. Import the Figtree font family

Import the CSS that declares the Figtree font face.

Depending on the method you followed in step 3, you must take a different step:

<details class="kth-details">
<summary>Option 1. You serve static assets from KTH Style CDN</summary>
<div class="kth-details__content">

TODO

</div>
</details>

<details class="kth-details">
<summary>Option 2. You route a path to assets directory</summary>
<div class="kth-details__content">

You can import the Figtree using the HTML `<link>` tag or CSS `@import` rule.

```html
<link rel="stylesheet" href="/<YOUR_APP>/assets/fonts.css" />
```

```scss
@import url("/<YOUR_APP>/assets/fonts.css");
```

</div>
</details>

<details class="kth-details">
<summary>Option 3. You serve the assets yourself</summary>

Import the CSS file originally called `fonts.css` using the HTML `<link>` tag or CSS `@import` rule. You might need to edit it if you have move the font files to a different place

```html
<link rel="stylesheet" href="/<YOUR_PATH>/fonts.css" />
```

```scss
@import url("/<YOUR_PATH>/fonts.css");
```

</div>
