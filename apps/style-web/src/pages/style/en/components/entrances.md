---
layout: "@layouts/Page.astro"
title: "Entrances"
---

# Entrances

<p class="lead">Tell users what are the three KTH entrances and where they are</p>

## When to use

Inside [KPM](./kpm).

## How to use

You can get the entrances in two ways:

1. (Recommended) Inject the KPM script. See [KPM component](./kpm)
2. Make the HTML markup yourself

## How to make your own entrances

- Entrances should be **only** links to KTH main site (https://kth.se), student web (https://kth.se/student) and intranet (https://intra.kth.se).
- Use `nav` as container to indicate a navigation landmark.
- Use `aria-label` to add an accessible name
- Use the [menu item component](./menu-item) for extra styling.

<details>
<summary>Code</summary>
<div>

```html
<nav class="kth-entrances" aria-label="Ingångar">
  <ul>
    <li>
      <a class="kth-menu-item" href="https://kth.se">
        <span>kth.se</span>
      </a>
    </li>
    <li>
      <a class="kth-menu-item" href="https://kth.se/student">
        <span>Studentwebben</span>
      </a>
    </li>
    <li>
      <a class="kth-menu-item" href="https://intra.kth.se" aria-current="true">
        <span>Intranät</span>
      </a>
    </li>
  </ul>
</nav>
```

</div>
</details>

## Research on this component

- The `aria-label` does not translate in most cases. Read more in the [blog post "aria-label does not translate" (by Adrian Roselli)](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html). Future versions of KTH Style will recommend a combination of `aria-labelledby` with `kth-visually-hidden`.
