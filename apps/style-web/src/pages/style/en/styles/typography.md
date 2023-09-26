---
title: Typography
layout: ../../../../layouts/Page.astro
---

# Typography

Typography in KTH Style is based on KTH graphical identity.

> **Note**
> This document is under construction. We are adding more examples and clarification.

## Typography system

<!-- ![](../../../images/typography-all-fonts.png) -->

- The new graphical identity defines one single font family: Figtree. Previous versions of KTH Style have defined an extra font with serif for longer texts but that is no longer the case.
- KTH Style has defined combinations of font size, line height and font weight. They are defined with readibility in mind and to create a visual rythm.
- Padding and margin is defined in [Spacing](./spacing.md).

## Visual font sizes vs semantic document hierarchy

In previous versions of KTH Style, we have defined 6 styles for the headings from `<h1>-<h6>`. However, reality shows that _visual_ hierarchy (what is visually big or small) doesn't match 100% with the heading level (the hierarchy in the document).

- An `h2` in an article might have a very big font but an `h2` in a navigation menu might be small.
- A floating "puff" might have a heading to match the hierarchy of the article but requires smaller font because its placed in a side.

Therefore, we cannot map 1:1 HTML headings with a given font for all cases.

## Semantic tokens

KTH Style defines the following tokens for the CSS `font` short-hand property. We don't define any semantic token for individual properties

For blocks (paragraphs and headings) in articles and main areas of content

- `--font-default`. Used it by default
- `--font-heading-xl`. It is equivalent to the font for the `<h1>` tag.
- `--font-heading-l`. Equivalent to the `<h2>` tag.
- `--font-heading-m`. Equivalent to the `<h3>` tag.
- `--font-heading-s`. Equivalent to the `<h4>` tag.
- `--font-lead`. Used for the leading paragraph below a big title

For blocks (paragraphs and headings) in other places, we provide `label-<xxx>` fonts that can be used in different contexts. Usually you start using the smallest possible, and then you increase in size when required.

- `--font-label-s`
- `--font-label-m`
- `--font-label-l`

## Themes

There are no different themes for typography at this moment.

### Other styles

> **Note**
> Styles for non-block elements (e.g. buttons) are not defined yet

## How to use

### In a single selector

Use the CSS custom properties for styling texts in a component:

```scss
label {
  font: var(--font-label-s);
}
```

### The `prose` mixin

The purpose of this mixin is to style an "article", i.e. a region of a document that will contain text-based information. It contains base styles for several HTML tags at once. It adds styles to things like headings, lists, quotes and so on.

- It is ready to be used "as it is", to style a HTML article generated from a Markdown file or a CMS where writers cannot customize class names.
- It sets default `font` values as well as paddings and margins for most common HTML tags used in articles.
- It takes into account combinations of elements (e.g. `<h2>` followed by an `<h3>`).

```scss
@use "@kth/style/scss/utils/prose";

article {
  @include prose.prose;
}
```

### Reset

`reset.scss` sets the default values for CSS custom properties in `:root`

```scss
@use "@kth/style/scss/utils/reset.scss";
```
