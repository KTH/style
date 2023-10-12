---
title: Reset
layout: "@layouts/Page.astro"
---

# Reset

<p class="lead">Apply KTH Style normalized CSS</p>

## How to use

### Reset the document (CSS)

If you want to generate the styles to the entire document, import the reset file as it is.

```scss
@use "@kth/style/scss/utils/reset";
```

### Reset a part of the document (Sass mixin)

This mixin is meant for resetting one part of the HTML document.

- Good for example, if you are building a widget.
- It generates styles scoped to the selector of your choice
- Does not style `html`, `body`, `:root`
- Does not set default values for tokens. You decide if you want to set them or read them from container

```scss
// Set the variable `$generate-css` to `false` to not generate any CSS
@use "@kth/style/scss/utils/reset" with (
  $generate-css: false
);

.article {
  @include reset.reset;
}
```
