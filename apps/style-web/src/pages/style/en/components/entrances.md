---
layout: "@layouts/Page.astro"
title: "Entrances"
---

# Entrances

<p class="lead">Tell users what are the three KTH entrances and where they are</p>

## When to use

Inside [KPM](/style/en/components/kpm).

## How to use

You can get the entrances in two ways:

1. Inject the KPM script, which includes the entrances. This script is under development
2. Make the HTML markup yourself

## How to make your own entrances

Use the code snippet for the menus in English or Swedish

<details>
<summary>Entrances menu when the current page is in Swedish</summary>
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

<details>
<summary>Entrances menu when the current page is in English</summary>
<div>

```html
<nav class="kth-entrances" aria-label="Entrances">
  <ul>
    <li>
      <a class="kth-menu-item" href="https://kth.se">
        <span>kth.se</span>
      </a>
    </li>
    <li>
      <a class="kth-menu-item" href="https://kth.se/student">
        <span>Student web</span>
      </a>
    </li>
    <li>
      <a class="kth-menu-item" href="https://intra.kth.se" aria-current="true">
        <span>Intranet</span>
      </a>
    </li>
  </ul>
</nav>
```

</div>
</details>

Explanation of the code snippets:

- Entrances should be **only** links to KTH main site (https://kth.se), student web (https://kth.se/student) and intranet (https://intra.kth.se).
- Use the `<nav>` tag as the container to indicate a navigation landmark.
- Use `aria-label` attribute in the `<nav>` container to add an accessible name. The value of that attribute should be the same language as its content.
- The `aria-label` in `<nav>` should not include the term "navigation".
- Use the [menu item component](/style/en/components/menu-item) for extra styling.
- Mark the `<a>` with the current entrance with the attribute `aria-current="true"`.

## Research on this component

- The `aria-label` does not work properly with automatic translation tools like Google Translate. Read more in the [blog post "aria-label does not translate" (by Adrian Roselli)](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html). Future versions of KTH Style may recommend a combination of `aria-labelledby` with `kth-visually-hidden`.
