---
title: Typography
layout: "@layouts/Page.astro"
---

# Typography

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

> [!Note]
> Styles for non-block elements (e.g. buttons) are not defined yet

## How to use

### Bring the font to your project

Read the [get started guide for developers](/style/en/get-started/developers.md)

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
