---
layout: "@layouts/Page.astro"
title: "Mega-menu (in header)"
---

# Mega-menu (in header)

<p class="lead">Global navigation links to different pages within the same "entrance"</p>

## When to use

- Inside the [header](/style/en/components/header), in pages that are part of either [kth.se](https://kth.se), [intranet](https://intra.kth.se) or [student web](https://kth.se/student).

## When not to use

- For pages that are not part of kth.se, intranet or student web.
- You are making an app where users should not leave in any intermediate step. For example: account activation

## How to use

### Wide version

<iframe src="/style/en/examples/header/mega-menu"></iframe>

<details>
<summary>Code</summary>
<div>

```html
<header class="kth-header external">
  <div class="kth-header__container">
    <nav class="kth-mega-menu">
      <ul>
        <li>
          <a href="#" class="kth-menu-item dropdown">
            <span>Item 1</span>
          </a>
        </li>
        <li>
          <a href="#" class="kth-menu-item dropdown">
            <span>Item 2</span>
          </a>
        </li>
        <li>
          <a href="#" class="kth-menu-item dropdown">
            <span>Item 3</span>
          </a>
        </li>
        <li>
          <a href="#" class="kth-menu-item dropdown">
            <span>Item 4</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

```scss
@use "@kth/style/scss/components/header.scss";
@use "@kth/style/scss/components/menu-item.scss";
@use "@kth/style/scss/components/mega-menu.scss";
```

</div>
</details>

- Menu items are exposed in an horizontal list.
- Read [menu item](/style/en/components/menu-item) to add style and JavaScript behavior.

### Mobile version

<iframe src="/style/en/examples/header/mega-menu--collapsable"></iframe>

- Show only one button that expands the whole menu
- Use [menu item](/style/en/components/menu-item) to style it.
- Use [TODO] to add the panel that opens the menu
