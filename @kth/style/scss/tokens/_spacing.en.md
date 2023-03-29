---
lang: en
---

# How to use

We provide two ways for consuming these values:

- With the utility functions `padding`, `margin` and `gap`
- With the variables `$space-<number>`

## Utility functions `padding`, `margin` and `gap`

All three functions accept an arbitrary number of arguments, so they can be used in shorthand and non-shorthand CSS properties.

```scss
@use "@kth/style/scss/tokens" as t;

.an-element {
  // Passing two values at the same time
  padding: t.padding(2 8);

  // Passing one value only
  margin-inline-end: t.margin(0);
}
```

All three functions will throw an error if the passed value is invalid. Accepted values are: 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64 and 80.

## Variables `$space-<value>`

This package also exports variables named `$space-<value>` (example: `$space-2`) which can be convenient if you need a single value.

```scss
@use "@kth/style/scss/tokens" as t;

.an-element {
  padding-top: t.$space-4;
}
```
