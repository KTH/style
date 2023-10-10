---
layout: "@layouts/Page.astro"
title: "Structure"
---

# Page structure

When making a page or application, make sure you follow these guidelines

## Metadata and head

- Write the page language in the `<html>` tag. Use `sv` for Swedish and `en` for English. Read more about [guidelines for page language in webbriktlinjer.se (in Swedish)](https://webbriktlinjer.se/riktlinjer/141-ange-sidans-sprak-i-koden/)

  ```html
  <html lang="sv"></html>
  ```

- Write a relevant page title using the `<title>` tag. Read more about [guidelines for page titles in webbriktlinjer.se (in Swedish)](https://webbriktlinjer.se/riktlinjer/135-skriv-beskrivande-sidtitlar/).

## Global styles

- Include the [reset utility](../utils/reset).

## Body

The `body` of a KTH page or application should have the following parts:

1. [**A11y nav component**](../components/a11y-nav). Defines links for keyboard users (for example "Skip to main content")
2. **KPM**. Defines the region for the entrances and Personal menu.
   1. **Entrances**. Link to kth.se, intranet and student web
   2. **Personal menu**. Links to relevant pages for the user
3. [**Main header**](../components/main-header). Should be the same across all pages under the same site. It is divided into:
   1. [**Logotype**](../components/main-header__logotype)
   2. [**Mega-menu (non-collapsable)**](../components/main-header__mega-menu). Include dropdowns that opens panels to different places
   3. [**Tools**](../components/main-header__tools). Include site-wide tools like search and language switcher.
   4. **Mega-menu (collapsable)**. Same as "Mega-menu (non-collapsable)" but for mobile
4. **Content**. Everything in between the header and the footer. This content can change between pages in the same site.
   1. **Breadcrumbs**
   2. **Sidebar**
   3. **Main**
5. **Main footer**. Should be the same across all pages under the same site.

## How to use

The components above are expected to be placed like this:

```html
<body>
  <div class="kth-a11y-nav"></div>
  <div class="kth-kpm"></div>
  <header class="kth-main-header"></header>
  <div class="kth-content">
    <nav class="kth-breadcrumbs"></nav>
    <aside class="kth-sidebar"></aside>
    <main></main>
  </div>
  <footer class="kth-main-footer"></footer>
</body>
```
