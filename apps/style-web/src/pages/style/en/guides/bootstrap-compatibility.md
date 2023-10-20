---
title: "Bootstrap compatibility"
layout: "@layouts/Page.astro"
---

# Bootstrap compatibility

<p class="lead">How to have both "kth-style" and "@kth/style" packages in the same project</p>

## If you are importing the entire kth-bootstrap.scss

1. Declare CSS layers `old-kth-style` and `kth-style`

   ```diff
   // Import @kth/style artifacts
   @use "@kth/style/scss/..."

   + @layer old-kth-style, kth-style;

   // Import kth-style
   @import "kth-style/public/scss/kth-bootstrap.scss";
   ```

2. Import `dist/kth-bootstrap.css` instead of the `.scss` file, and add it to the `old-kth-style` layer:

   ```diff
   - @import "kth-style/public/scss/kth-bootstrap.scss";
   + @import "kth-style/dist/kth-bootstrap.css" layer(old-kth-style);
   ```

Read more:

- [CSS cascade layers (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)
