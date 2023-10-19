---
layout: "@layouts/Page.astro"
title: "Menu item (in header and KPM)"
---

# Menu item and panel

<p class="lead">Consistent style and behavior for items in header and personal menu</p>

## When to use

- Inside the [mega menu](./mega-menu.md) or [personal menu].

## How to use

The menu item has those parts:

1. **Menu item**. One item inside a menu that triggers an action when user interacts with it.
2. **Menu panel**. A panel that opens when the user interacts with the menu-item

### Menu item

- Use always `<a>` or `<button>` for the markup
- Do not use `<a>` if the link goes nowhere. Avoid using `#`, `javascript:void(0)` as `href`. In those cases, use `<button>`
- If you use `<a>` Try to "open in a new tab" the link. If the opened page does not make any sense or is the same, remove the link and use `<button>` instead.
- Use `<button>` if JavaScript is required.

To style the item, use the CSS `kth-menu-item` class

- You can use the classes `dropdown`, `search` or `language` to add an icon to the menu item.

### Menu panel

- Place a `<dialog>` element immediately after the menu item.
- For the non-modal version, use the CSS class `kth-menu-panel`.
- For the modal version, use the CSS class `kth-menu-panel--modal`.
- Use the JavaScript class `MenuPanel` to add the open/close behavior

#### Non-modal menu panel

<details>
  <summary>Code</summary>

```html
<div id="container">
  <button class="kth-menu-item">...</button>
  <dialog class="kth-header-panel">
    <div class="kth-header-panel__container">
      <button class="kth-button close">
        <span class="kth-visually-hidden">Close</span>
      </button>
      <div class="kth-header-panel__content">Lorem ipsum</div>
    </div>
  </dialog>
</div>
```

```scss
@use "@kth/style/scss/compoments/menu-item";
@use "@kth/style/scss/compoments/menu-panel";
```

```js
import { MenuPanel } from "@kth/style";
MenuPanel.init(
  // This first argument is the common container for the menus.
  // When user focus outside of it, all menu panels are closed
  document.querySelector("#container"),

  // This can be more than one menu items
  document.querySelectorAll(".kth-menu-item"),
);
```

</details>

#### Modal menu panel
