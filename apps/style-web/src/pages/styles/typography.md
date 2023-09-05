# Typography

## Typography system

## Visual font sizes vs semantic document hierarchy

In previous versions of KTH Style, we have defined 6 styles for the headings from `<h1>-<h6>`. However, reality shows that _visual_ hierarchy (what is visually big or small) doesn't match 100% with the heading level (the hierarchy in the document).

- An `h2` in an article might have a very big font but an `h2` in a navigation menu might be small.
- A floating "puff" might have a heading to match the hierarchy of the article but requires smaller font because its secondary position.

Therefore, we cannot map 1:1 HTML headings with a given font for all cases.

## How to use semantic tokens for font properties

KTH Style defines the following variables that includes values for the CSS `font` short-hand property. There are not semantic tokens for individual properties (font family, font size, letter spacing, line height).

- `--default-font`. Used it by default

For articles and main areas of the page:

- `--xl-font`. It is equivalent to the font for the `<h1>` tag.
- `--l-font`. Equivalent to the `<h2>` tag.
- `--m-font`. Equivalent to the `<h3>` tag.
- `--s-font`. Equivalent to the `<h4>` tag.
- `--lead-font`. Used for the leading paragraph below a big title

For other places, we provide "label" fonts that can be used in different contexts. Usually you start using the smallest possible, and then you increase in size when required.

- `--label-s-font`
- `--label-m-font`
- `--label-l-font`
- `--label-xl-font`

## Paddings, margins and other properties

All fonts need to be paired with padding and margin values. To help with this, KTH Style offers Sass mixins that sets multiple CSS properties at the same time

CSS doesn't have any mechanism for grouping multiple properties so we provide Sass mixins to set multiple properties at once.

### Style one element

Mixins `xl`, `l`, `m`, `s`, `lead`, `label-s`, `label-m`, `label-l`, `label-xl` add padding, margin and font values to one element.

```scss
section h2 {
  @include label-s;
}
```

### Style multiple properties for multiple elements at the same time

In some contexts, you need to add or remove margins and paddings when, for example, an `<h3>` comes just after an `<h2>`.

Use mixin `prose` for it. It add styles to several tags like headings, lists, quotes and so on. This works specially for styling the main container of a page

```scss
article {
  @include prose;
}
```
