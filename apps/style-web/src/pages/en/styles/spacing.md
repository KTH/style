---
title: Spacing
layout: ../../layouts/Page.astro
---

# Spacing

Spacing system in KTH Style is based on an 8px grid and helps adding hierarchy between UI elements

## Spacing system

All spacing values are defined as `1/16 rem` or "1/16th of the user font size in their browser". For example, a padding value of `8` means `8/16 rem` or `0.5rem`

<details>
<summary>Why?</summary>

- Why `rem` instead of `px`? It is important that font size and measurements (widths, heights, paddings) keep the same proportions for accessibility and usability reasons. CSS pixel is not proportional to base font size if the user changes their settings.
- Why `1/16`? It is equivalent to 1 CSS pixel by default in all major browsers
</details>

KTH Style spacing scale is based on [Atlassian](https://atlassian.design) design system and defines 14 different spacing values.

- Small values: 0, 2, 4, 6 and 8
- Medium values: 12, 16, 20 and 24
- Large values: 32, 40, 48, 64 and 80

> [!Note]
> The scale is not linear but exponential. Smaller values increment by 2 and larger ones increment by 8 and even 16

All values in the scale are defined as reference tokens.

## Spacing within a component

KTH Style defines two semantic tokens for spacing inside a component.

- `--space-inner-inline` for inner padding in the inline axis (horizontal)
- `--space-inner-block` for inner padding in the block axis (vertical)

### How to use

For components with clear boundaries, use both `--space-inner-inline` and `--space-inner-block`:

```scss
.button.primary {
  padding-block: var(--space-inner-block);
  padding-inline: var(--space-inner-inline);
}
```

For components without boundaries, set padding only to the block axis:

```scss
.link {
  padding-block: var(--space-inner-block);
}
```

For components with borders, use calc to substract the border width:

```scss
.button.secondary {
  border-width: $border-1;
  padding-block: calc(var(--space-inner-block) - #{$border-1});
  padding-inline: calc(var(--space-inner-inline) - #{$border-1});
}
```

## Spacing between components

Use reference tokens to add spacing between UI elements.

Here are some tips to help you applying them:

### Minimum spacing between elements

Make sure that there is enough space to avoid confusion with a "white-space" character.

To style components with the default font size, i.e. `1rem = 16`:

- Between texts, at least 16 in the inline axis.

For everything else, 4 is enough as minimum spacing.

- Spacing in the block axis between texts
- Between text and icons, in all axes
- Between elements with clear boundaries, in all axes

### Smaller space for related elements

- Related elements need smaller space between them
- Less related elements need bigger spacing between

## Further guidance

> [!Note]
> Further guidance for elements placement and layout is coming soon

Consult KTH Style group in case you have different spacing/layout needs.
