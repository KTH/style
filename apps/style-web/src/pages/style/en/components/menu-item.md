---
layout: "@layouts/Page.astro"
title: "Menu item (in header and KPM)"
---

# Menu item and panel

<p class="lead">Consistent style and behavior for items in header and personal menu</p>

## When to use

- Inside the [mega menu](./mega-menu.md) or [personal menu].

## How to use

KTH Style has the following components:

1. **Menu item**. One item inside a menu that triggers an action when user interacts with it. The action can be opening a panel or something different
2. **Menu panel**. A panel that opens when the user interacts with the menu-item. The panel is not modal and opens below the header
3. **Menu panel (modal)**. A panel that opens when the user interacts with the menu-item. The panel is modal and opens on top of the page in a side

### Menu item

For the markup use always `<a>` or `<button>`. Here are some tips to help you decide between `<a>` or `<button>`:

- Use `<button>` instead of links that go nowhere. Avoid `href="#"`, `href="javascript:void(0)"` or similar
- As a quick test: try to open the link in a new tab. If the opened page does not make any sense or is the same as the page you were before, you probably want to use `<button>` instead.

`<a>` can be a good solution if you want to offer a JavaScript-free fallback. For example

- When user clicks the menu, it opens a search panel, which requires JavaScript
- The menu is implemented with an `<a>` that goes to a [search page](https://kth.se/sok). If JavaScript is not available, users can still use the search functionality
- Use `<button>` if JavaScript is required.

To style the item, use the CSS `kth-menu-item` class

- Use the additional classes `dropdown`, `search` or `language` to add an icon to the menu item.

### Menu panel

- Place a `<dialog>` element immediately after the menu item.
- For the non-modal version, use the CSS class `kth-menu-panel`.
- For the modal version, use the CSS class `kth-menu-panel--modal`.
- Use the JavaScript class `MenuPanel` to add the open/close behavior

#### Non-modal menu panel

<details>
<summary>Code</summary>
<div>

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

</div>
</details>

#### Modal menu panel

<details><summary>Code</summary>
<div>

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
MenuPanel.initModal(
  // This first argument is the common container for the menus.
  // When user focus outside of it, all menu panels are closed
  document.querySelector("#container"),

  // This can be more than one menu items
  document.querySelectorAll(".kth-menu-item"),
);
```

</div>
</details>
