---
title: Icons
layout: "@layouts/Page.astro"
---

# Icons

<p class="lead">KTH Style provides icons as an extra aid for users but you should avoid them in most cases.</p>

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
- An "Error message" with an error icon, should be understood as error or include the word "Error". Phrases like "Name is required", "Invalid e-mail" _sound_ like errors; "Write your name" or "Write a different e-mail" don't

If you still require an icon without text:

- Do not be creative. Use world-recognized icons like "magnifying glass" for "Search" or "X" for "close".

## Icon system

- All icons are squared.
- Icons are monochrome and can be recolored via CSS.
- Defined as data URLs in SVG.
- Some icons use the same SVG but transformed via CSS. For example, we use the same icon for arrows in all directions.

## How to use icons

### Use icons as part of a component

Most of the icons are delivered in components or as variants of them. Use the components. Examples:

- Buttons
- Navigation dropdown
- Language and search links for header includes respective icons
- Collapse component
- Alerts
- Favorite

### Use the `icon-` mixins in your own component

> [!Note] Read this _only_ if there is no other component that suit your needs or if you are creating a new component

- Use the mixins `icon-XXX` provided in `icons.scss`
- Use the `background-color` property to change the color of the icon
- Include both the mixin and the `background-color` property in `::after` or `::before` pseudo-classes.

For example, to put the search icon after the text in a button:

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

If the element with the icon does not have text, use the `.visually-hidden` class to add text for people who cannot see the icon

```html
<button class="close-button">
  <span class="visually-hidden">Close</span>
</button>
```

If the element is interactive, use the following width, height and padding:

```scss
.close-button {
  width: calc(#{spacing.$space-24} + 2 * var(--space-inner-icon));
  height: calc(#{spacing.$space-24} + 2 * var(--space-inner-icon));
  padding: var(--space-inner-icon);

  ::after {
    @include icons.icon-close;
    width: 100%;
    height: 100%;
    background-color: var(--color-tertiary);
  }
}
```

### Use other SVG icons

KTH Style provides separately:

- Sass variables with icons encoded as SVG in the `icons-raw.scss` file
- Sass mixin `with-icon` to help you creating your own mixins

For example, to create your own "Maximize/fullscreen button":

```html
<button class="maximize-button">Expand view</button>
```

```scss
@use "@kth/style/scss/utils/icons";
@use "@kth/style/scss/utils/icons-raw" as raw;

.maximize-button {
  padding: spacing.$space-8 0;
  gap: spacing.$space-4;
  color: var(--color-tertiary);

  ::before {
    @include icons.with-icon(raw.$icon-fullscreen);
    background-color: var(--color-tertiary);
    width: 1.25rem;
    height: 1.25rem;
  }
}
```
