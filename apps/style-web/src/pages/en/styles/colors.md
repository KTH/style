---
title: Colors
layout: ../../../layouts/Page.astro
---

# Colors

Color system in KTH Style is based on KTH graphical identity and implements accessible contrast requirements by default.

## Brand colors (reference tokens)

> **Note**
> This section is under development

The new graphical identity defines 6 tones of primary colors. Five blues and one beige.

![The 6 colors for KTH graphical identity](../../../images/color-blues.png)

- All reference tokens are defined as Sass variables.
- KTH Style has defined extra colors for specific web uses outside of the graphical identity
- You should not use reference tokens if there is a semantic token available.

## Semantic colors (semantic tokens)

Different semantic tokens in some themes can be the same color but should not be used interchangeably. Their value can change in different themes.

Example:

- In the "defualt theme", `--background-color` and `--primary-on-color` (color for the text of the button) are both white
- In the "intranet theme", `--background-color` is beige but `--primary-on-color` is white.

![Image showing that different tokens might refer to the same or different values depending on the theme](../../../images/color-semantic-difference.png)

### Surface, primary and secondary colors

Surface colors are used for large surfaces like a header or the whole page. They are:

- `--background-color`. Color for the background of the surface
- `--text-color`. Color for texts that are directly written on the surface

Primary colors are used for UI components with a "primary" appearance:

![A button and a filtering tab components with primary appearance](../../../images/color-primary.png)

- `--primary-color`. Main color of the component. For example the background of a button
- `--primary-on-color`. Color for elements _inside_ the component. For example texts and icons of a button

Secondary colors are used for UI elements with a "secondary" appearance:

![A button and tab using boxed appearance, a collapse and link using unboxed appearance](../../../images/color-secondary.png)

- `--boxed-secondary-color`. Main color for secondary components with borders. For border, texts and icons
- `--unboxed-secondary-color`. Main color for secondary components without borders. For texts and icons

Accessibility: UI components that use `--unboxed-secondary-color` **must** have extra elements to indicate they are interactive. For example:

- Specific position: a link positioned inside a navigation area
- A decoration: an underlined link
- Extra elements: icons for collappse and dropdowns

### Success and error colors

> **Note**
> These colors are not defined yet in `colors.scss`. We need to set values for them in all themes

Used to indicate success and error.

![An input with error message and a "Fortsätt" button with success color](../../../images/color-error-success.png)

- `--error-color`. Color for errors. Used in borders, texts and backgrounds of UI elements
- `--success-color`. Color for success. Used in borders, texts and backgrounds of UI elements

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
  background: var(--primary-color), var(--hover-overlay, transparent);
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

![Showcase of 4 themes defined by KTH Style](../../../images/color-themes.png)

KTH Style defines the following 4 color themes:

- `theme-color-default`.
- `theme-color-inverse`. For the header in kth external web
- `theme-color-intranet`. For the header in intranet
- `theme-color-student`. For the header in student web

## Accessibility

> **Note**
> This section is important only if you are implementing a new theme

All colors in a given theme must met the WCAG contrast requirements for the purpose that are designed for. Example:

- `--background-color` and `--text-color` should have as highest contrast as possible since they are colors for background and normal text. At least 7:1 is desired
- `--background-color` should have contrast with `--primary-color`, `--error-color` and `--success-color` (all of the three) of at least 4.5:1 since the latter three appear always on the background.
- `--primary-on-color` should have contrast with `--primary-color`, `--error-color` and `--success-color` (all of the three) of at least 4.5:1
- `--boxed-secondary-color` should have 4.5:1 contrast with `--background-color`
- `--unboxed-secondary-color` should have 4.5:1 contrast with `--bacakground-color`. It is recommended to have a 3:1 contrast with `--text-color`.

## How to use semantic tokens

### When creating a component

When building a component, use the appropiates CSS custom properties. You can provide default values but are often not needed

```scss
.search-form__button {
  background: var(--primary-color);
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
