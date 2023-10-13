# Style web

Documentation for `@kth/style` package and guidelines. This app is made with [Astro](https://astro.build).

## Getting started

- Install dependencies with `npm install`
- Run `npm run dev`

## Structure

```
style-web/
├── src/
│   ├── components
│   ├── images
│   ├── layouts
│   └── pages/
│       └── style/
│           └── en/
│               ├── get-started
│               ├── styles
│               ├── layout-structure
│               └── components
└── public
```

- `src/pages` contain all pages in KTH Style website, most of them in markdown format. One file corresponds to one page. Example:

  - [`src/pages/index.html`](./src/pages/index.html) is served in http://localhost:4321
  - [`src/pages/style/index.html`](./src/pages/style/index.html) is served in http://localhost:4321/style
  - [`src/pages/style/en/index.md`](./src/pages/style/en/index.md) is served in http://localhost:4321/style/en
  - etc.

  > [!Note] Certain pages are served **outside** of http://localhost:4321/style path, for example: http://localhost:4321/cm from the directory [`src/pages/cm`](./src/pages/cm). Those are special files present for development purposes.

- `src/components` are components used in KTH Style website. They are **not** components in `@kth/style`. They can be:

  - Components created for convinience to avoid repetitions
  - Components that will be part of `@kth/style` but needs to be tested

- `src/layouts` are special components that define layout templates for the KTH Style website

- `public`. This directory contains assets that will be served as they are.

  - [`/public/style`](./public/style/) is served in `http://localhost:4321/style`

## Conventions

There is no `css` directory to store CSS or Sass files. Files required by a specific file are placed side-by-side and named with the same name.

- Styles required by `src/layouts/Page.astro` are in `src/layouts/Page.scss`
