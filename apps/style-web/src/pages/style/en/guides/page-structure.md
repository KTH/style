---
layout: "@layouts/Page.astro"
title: "Structure"
---

# Page structure

<p class="lead">Ensure usability and accessibility by using a consistent HTML structure across pages</p>

> [!Note] This document does not apply for widgets

## HTML metadata and head

- Write the page language in the `<html>` tag. Use `sv` for Swedish and `en` for English. Read more about [guidelines for page language in webbriktlinjer.se (in Swedish)](https://webbriktlinjer.se/riktlinjer/141-ange-sidans-sprak-i-koden/)

  ```html
  <html lang="sv"></html>
  ```

- Write a relevant page title using the `<title>` tag. Read more about [guidelines for page titles in webbriktlinjer.se (in Swedish)](https://webbriktlinjer.se/riktlinjer/135-skriv-beskrivande-sidtitlar/).

## HTML body

The `body` of a KTH page or application should have the following parts:

1. [**A11y nav component**](/style/en/components/a11y-nav). Defines links for keyboard users (for example "Skip to main content")
2. [**KPM**](/style/en/components/kpm). Defines the region for the entrances and Personal menu.
   1. [**Entrances**](/style/en/components/entrances). Link to kth.se, intranet and student web
   2. **Personal menu**. Links to relevant pages for the user
3. [**Header**](/style/en/components/header). (`<header>`) Should be the same across all pages under the same site. It is divided into:
   1. [**Logotype**](/style/en/components/logotype)
   2. [**Mega-menu**](/style/en/components/mega-menu). Include dropdowns that opens panels to different places
   3. Tools. Include site-wide tools like search and language switcher.
4. **Content**. Everything in between the header and the footer. This content can change between pages in the same site.
   1. **Breadcrumbs**
   2. **Sidebar** (`<aside>`)
   3. **Main content** (`<main>`)
5. **Footer**. Should be the same across all pages under the same site.

### Minimal template

Place the components mentioned before like this:

```html
<body>
  <div class="kth-a11y-nav"></div>
  <div class="kth-kpm"></div>
  <header class="kth-header"></header>
  <div class="kth-main-content">
    <nav class="kth-breadcrumbs"></nav>
    <aside></aside>
    <main></main>
  </div>
  <footer class="kth-footer"></footer>
</body>
```

## CSS

- Include the [reset utility](/style/en/utils/reset)
- Include all CSS required by all components
