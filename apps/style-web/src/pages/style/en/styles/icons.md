---
title: Icons
layout: "@layouts/Page.astro"
---

# Icons

KTH Style provides icons as an extra aid for users but you should avoid them in most cases.

## When to use

### Avoid icons if possible

Consider anything else before adding a button. Find better placement for your component or rephrase wording.

Examples:

- A link that downloads a PDF. Instead of a "PDF" icon, write "(pdf)" in the link text
- A link that opens in a new window. Instead of a "new window" icon, write "(opens in a new tab)"
- A button for print. Instead of a "printer" icon, write "Print this page"

### Prefer icons as decoration

Include text to make sure users understand a component if the icon is removed or not perceived.

- A "Back button" with an arrow should be labeled as "_Back to `<Page>`_", not as "`<Page>`"
- A "Search button" with a magnifying glass should include the text "Search"
- A "Warning message" with a warning icon, should be understood as error. Phrases like "Name is required", "Invalid e-mail" _sound_ like errors; "Write your name" or "Write a different e-mail" don't

If you still require an icon without text:

- Do not be creative. Use world-recognized icons like "magnifying glass" for "Search" or "X" for "close".

## Icon system

- All icons are squared.
- Icons are monochrome and can be recolored via CSS.
- Defined as data URLs in SVG.
- Some icons use the same SVG but transformed via CSS, for example, by rotating the icon.

## How to use icons

### As part of a component

Most of the icons are delivered in components or as variants of them. Use the components. Examples:

- Navigation dropdown
- Language and search links for header includes respective icons
- Collapse component
- Alerts
- Favorite

### In your own component

> [!Note]
> Read this _only_ if there is no other component that suit your needs or if you are creating a new component.

For components with icon _and_ text, add an `::after` or `::before` selector in the button component. Use the mixins in `icons.scss`:

> [!Note]
> Icons should never be in between words

```scss
.button {
  // Text and button should be centered vertically
  display: flex;
  align-items: center;

  ::after {
    @include icons.icon-search;

    // Make sure that the text and icon has the same color
    background-color: var(--color-primary);
  }
}
```

<details>
<summary>
If the button lose its meaning when the icon is removed
</summary>

use the `.visually-hidden` class to add text that will be read for screen readers:

```html
<!-- This button is styled to have a "+" sign before the label to indicate "new" -->
<button>
  <span class="visually-hidden">New</span>
  <span>Document</span>
</button>
```

</details>

For buttons with _only icons_:

1.  Add either `::afer` or `::before` selector in the button component and include the icon with CSS.

    See also the spacing rules for buttons in [Spacing](./spacing.md)

    ```scss
    .favorite-button {
      padding-block: var(--space-inner-icon);
      padding-inline: var(--space-inner-icon);
      margin-inline: calc(-1 * var(--space-inner-icon));

      // There is nothing else in this button so you can use `::before` or
      // `::after` interchangeably
      &::after {
        @include icons.icon-search;
        background-color: var(--color-primary);
      }
    }
    ```

2.  Use the `.visually-hidden` class to add text for people who cannot see the icon

    ```html
    <button class="favorite-button">
      <span class="visually-hidden">Add to favorite</span>
    </button>
    ```