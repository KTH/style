# Typography

> **Note**
> This document is under construction. We are adding more examples and clarification.

## Typography system

## Visual font sizes vs semantic document hierarchy

In previous versions of KTH Style, we have defined 6 styles for the headings from `<h1>-<h6>`. However, reality shows that _visual_ hierarchy (what is visually big or small) doesn't match 100% with the heading level (the hierarchy in the document).

- An `h2` in an article might have a very big font but an `h2` in a navigation menu might be small.
- A floating "puff" might have a heading to match the hierarchy of the article but requires smaller font because its secondary position.

Therefore, we cannot map 1:1 HTML headings with a given font for all cases.

## Semantic tokens

KTH Style defines the following tokens for the CSS `font` short-hand property. We don't define any semantic token for individual properties

For blocks (paragraphs and headings) in articles and main areas of content

- `--default-font`. Used it by default
- `--heading-xl-font`. It is equivalent to the font for the `<h1>` tag.
- `--heading-l-font`. Equivalent to the `<h2>` tag.
- `--heading-m-font`. Equivalent to the `<h3>` tag.
- `--heading-s-font`. Equivalent to the `<h4>` tag.
- `--lead-font`. Used for the leading paragraph below a big title

For blocks (paragraphs and headings) in other places, we provide `label-<xxx>` fonts that can be used in different contexts. Usually you start using the smallest possible, and then you increase in size when required.

- `--label-s-font`
- `--label-m-font`
- `--label-l-font`

### Other styles

> **Note**
> Styles for non-block elements (e.g. buttons) are not defined yet

## How to use

### In a single selector

Use the CSS custom properties for styling texts in a component:

```scss
label {
  font: var(--label-s-font);
}
```

### The `prose` mixin

Use mixin `prose` to add default styling for several HTML tags at once. It add styles to things like headings, lists, quotes and so on.

```scss
@use "@kth/style/scss/typography";

article {
  @include typography.prose;
}
```
