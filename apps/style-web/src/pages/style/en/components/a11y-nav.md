---
layout: "@layouts/Page.astro"
title: A11y nav
---

# A11y nav

<p class="lead">Shortcut links for keyboard users</p>

## How to use

- Place this component in the beginning of the body. Read [page structure](../layout-structure/page-structure) for more information.
- Do not put anything except links inside the a11y nav component

<iframe src="/style/en/examples/a11y-nav/default" title="Example default a11y nav"></iframe>

<details>
<summary>Code</summary>
<div>

```html
<div class="kth-a11y-nav">
  <a href="#main-content">Go to main content</a>
</div>
```

```scss
@use "@kth/style/scss/components/a11y-nav.scss";
```

</div>
</details>
