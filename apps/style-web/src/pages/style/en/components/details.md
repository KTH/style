---
title: Details (former Collapse)
layout: "@layouts/Page.astro"
---

# Details (former Collapse)

<p class="lead">Make a page easier to scan by hiding non-essential detailed information until it is needed</p>

## When to use this component

Use this component to hide information that is relevant for some users.

## Details vs Accordion

The former Collapse component are now two components: Details (this component) and [Accordion](./accordion). Both are useful to make a page easier to scan, but they differ in purpose and also in semantics. Details should be used for:

- Information that is not relevant for every user
- Information that is not important
- Short information (one or few paragraphs)

The semantics of Details are `<details>` and `<summary>` which means:

- The title (`summary`) is **not** a heading. It does not affect the headings hierarchy of the rest of the document
- The content should **not** include any headings, sections and other landmarks

## How it works

<iframe src="/style/en/examples/details/default" title="Interactive example of default details"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<details>
  <summary>Show details</summary>
  <div>
    <p>Lorem ipsum</p>
  </div>
</details>
```

```scss
@use "@kth/style/scss/components/details.scss";
```

</div>
</details>
