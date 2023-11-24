---
title: Typography
layout: "@layouts/Page.astro"
---

# Typography

> [!Note] This document is under development

Typography in KTH Style is based on KTH graphical identity.

## Typography system

- The new graphical identity defines one single font family: Figtree. No serif font is defined.
- Defines combinations of font size, line height and font weight. They are defined with readibility in mind and to create a visual rythm.
- Padding and margin is defined in [Spacing](/style/en/styles/spacing.md).

## Variable font Figtree

KTH Style offers the Figtree font in **variable woff2 format** which maximizes compression.

- WOFF2 format is [widely supported](https://caniuse.com/woff2)
- Variable fonts are also [widely supported](https://caniuse.com/variable-fonts)
- Figtree variable in WOFF2 (28 Kb) is **smaller** than the static Regular and SemiBold in WOFF2 together (21 Kb each).
- Users of old browsers will see the fallback font Arial or the default sans-serif font in their systems. No fallback formats (WOFF, OTF, TTF...) are provided.

## Visual font sizes vs semantic document hierarchy

In previous versions of KTH Style, we have defined 6 styles for the headings from `<h1>-<h6>`. However, reality shows that _visual_ hierarchy (what is visually big or small) doesn't match 100% with the heading level (the hierarchy in the document).

- An `h2` in an article might have a very big font but an `h2` in a navigation menu might be small.
- A floating "puff" might have a heading to match the hierarchy of the article but requires smaller font because its placed in a side.

Therefore, we cannot map 1:1 HTML headings with a given font for all cases.

## How to use

### Bring the font to your project

Read the [get started guide for developers](/style/en/get-started/developers.md)

### In a single selector

> [!Note] this is under development

### The `prose` mixin

The purpose of this mixin is to style an "article", i.e. a region of a document that will contain text-based information. It contains base styles for several HTML tags at once. It adds styles to things like headings, lists, quotes and so on.

- It is ready to be used "as it is", to style a HTML article generated from a Markdown file or a CMS where writers cannot customize class names.
- It sets default `font` values as well as paddings and margins for most common HTML tags used in articles.
- It takes into account combinations of elements (e.g. `<h2>` followed by an `<h3>`).

See the mixin in action in the [typography test page](https://kthstyledemoref.z6.web.core.windows.net/style/en/examples/typography/index.html)

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
