---
title: Colors
layout: "@layouts/Page.astro"
---

# Colors

Color system in KTH Style is based on KTH graphical identity and implements accessible contrast requirements by default.

## Reference tokens

> [!Note] You should not use reference tokens if there is a semantic token available.

The new graphical identity defines 6 tones of primary colors. Five blues and one beige.

| Name                | Hex value |
| ------------------- | --------- |
| $color-sand         | #e6e1dd   |
| $color-blue-kth     | #004791   |
| $color-blue-sky     | #6298d2   |
| $color-blue-marine  | #08004f   |
| $color-blue-light   | #e0edfc   |
| $color-blue-digital | #221dd9   |

In addition to that, KTH Style uses the following colors to meet various needs

| Name               | Hex value |
| ------------------ | --------- |
| $color-white       | #fcfcfc   |
| $color-gray-light  | #e6e6e6   |
| $color-gray-medium | #a5a5a5   |
| $color-gray-dark   | #323232   |
| $color-black       | #212121   |
| $color-blue-lake   | #036eb8   |
| $color-red-light   | #fad6d6   |
| $color-red         | #d8351e   |
| $color-red-dark    | #bf2c17   |
| $color-green-light | #d8ffe7   |
| $color-green       | #3f824e   |
| $color-green-dark  | #366f43   |

## Semantic colors (semantic tokens)

Different semantic tokens in some themes can be the same color but should not be used interchangeably. Their value can change in different themes.

Example:

- In the "defualt theme", `--color-background` and `--color-on-primary` (color for the text of the button) are both white
- In the "intranet theme", `--color-background` is beige but `--color-on-primary` is white.

![](@images/color-semantic-difference.png)

### Surface, primary, secondary and tertiary colors

Surface colors are used for large surfaces like a header or the whole page. They are:

- `--color-background`. Color for the background of the surface
- `--color-text`. Color for texts that are directly written on the surface

Primary colors are used for UI components with a "primary" appearance:

![](@images/color-primary.png)

- `--color-primary`. Main color of the component. For example the background of a button
- `--color-on-primary`. Color for elements _inside_ the component. For example texts and icons of a button

Secondary colors and tertiary are used for UI elements with secondary and tertiary appearance:

![](@images/color-secondary.png)

- `--color-secondary`. Main color for secondary components with borders. For border, texts and icons
- `--color-tertiary`. Main color for secondary components without borders. For texts and icons

Accessibility: UI components that use `--color-tertiary` **must** have extra elements to indicate they are interactive. For example:

- Specific position: a link placed in a navigation area
- A decoration: an underlined link
- Extra elements: icons for collappse and dropdowns

### Success and error colors

> **Note**
> These colors are not defined yet in `colors.scss`. We need to set values for them in all themes

Used to indicate success and error.

![](@images/color-error-success.png)

- `--color-error`. Color for errors. Used in borders, texts and backgrounds of UI elements
- `--color-success`. Color for success. Used in borders, texts and backgrounds of UI elements

Accessibility: UI components should not rely only on color to convey error or success meaning. Use icons, labels and other additional elements

### Other colors

> **Note**
> We are still working on this

We are still working on colors for:

- **Separators**. We are testing how different colors look like with different backgrounds
- **Shadows and backdrops**. This might be a single variable that defines entire properties (like the entire value for `box-shadow`)

### Colors for states

> **Note**
> We are still working on colors for hover

We think it is possible to define just one "overlay" color (something like a black with 10% opacity) and "merge" both the normal color with CSS:

```scss
// --hover-overlay transparent by default:
button.primary {
  background: var(--color-primary), var(--hover-overlay, transparent);
}

button.secondary {
  background: var(--hover-overlay);
}

// We don't need to style every hover component. Just need to set the value for the overlay and components will read the value
:hover {
  --hover-overlay: rgb(0 0 0 / 0.1);
}
```

Some components need to signal an "active" or "inactive" states:

- Checkboxes and radio buttons when they are checked
- A dropdown when its opened
- A menu item when the link refers to the current page
- Selected and unselected tab

We haven't found yet any clear pattern nor a set of colors that signals "active" universally. Specific components might need special colors designed exclusively for them.

## Contexts (themes)

![](@images/color-themes.png)

KTH Style defines the following 4 color themes:

- `theme-color-default`.
- `theme-color-inverse`. For the header in kth external web
- `theme-color-intranet`. For the header in intranet
- `theme-color-student`. For the header in student web

## Accessibility

> **Note**
> This section is important only if you are implementing a new theme

All colors in a given theme must met the WCAG contrast requirements for the purpose that are designed for. Example:

- `--color-background` and `--color-text` should have as highest contrast as possible since they are colors for background and normal text. At least 7:1 is desired
- `--color-background` should have contrast with `--color-primary`, `--color-error` and `--color-success` (all of the three) of at least 4.5:1 since the latter three appear always on the background.
- `--color-on-primary` should have contrast with `--color-primary`, `--color-error` and `--color-success` (all of the three) of at least 4.5:1
- `--color-secondary` should have 4.5:1 contrast with `--color-background`
- `--color-tertiary` should have 4.5:1 contrast with `--color-bacakground`. It is recommended to have a 3:1 contrast with `--color-text`.

## How to use semantic tokens

### When creating a component

When building a component, use the appropiates CSS custom properties. You can provide default values but are often not needed

```scss
.search-form__button {
  background: var(--color-primary);
  color: var(--primary-on-color);
}
```

### Switching themes

To set a different theme in a region of a document, use the Sass mixin `theme-<xxx>` provided in `colors.scss`:

```scss
@use "@kth/style/scss/tokens/colors";

.header {
  @include colors.theme-intranet;
}
```

### Reset

> **Note**
> This `reset.scss` file mentioned here is not ready yet.

KTH Styles `reset.scss` sets the default values for all CSS custom properties in `:root`

```scss
@use "@kth/style/scss/utils/reset.scss";
```
