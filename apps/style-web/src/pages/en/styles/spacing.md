---
title: Spacing
layout: ../../../layouts/Page.astro
---

# Spacing

## Spacing system

## How to use semantic spacing tokens

### Inner padding for UI components

When the component has a visible boundary box. For example: a colored or bordered button, a textbox, a table cell, etc.

- `--boxed-padding-inline`. Inline (horizontal) padding
- `--boxed-padding-block`. Block (vertical) padding

When the component hasn't a visible boundary box

- `--unboxed-padding-block`. Block (vertical) padding
- `0` for horizontal padding

### Separation between UI elements

At this moment, we haven't defined any semantic token for separation between UI elements so we encourage developers to use the Sass values.

### Padding and margin between blocks of text

At this moment, we haven't defined any semantic token for separation between texts.

- We offer mixins that set paddings and margins. Read more in [typography](typography.md).
- For other spaces, use the Sass values

## Themes

KTH Style defines the following spacing themes:

- `theme-sizing-default`. For everything except dense
- `theme-sizing-dense`. For dense UIs
