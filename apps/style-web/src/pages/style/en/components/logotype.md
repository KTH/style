---
title: Logotype (in header)
layout: "@layouts/Page.astro"
---

# Logotype (in header)

<p class="lead">Make clear to users that they are within KTH</p>

## When to use this component

- Inside the [header](./header) when building a full-page app.

## When not to use this component

- Do not use it for widgets or inside `<iframe>`
- The image assets in this component are optimized **exclusively** for the KTH header. For other uses, get the logotype from the [KTH graphical profile](https://intra.kth.se/en/administration/kommunikation/varumarke/grafiskprofil/logotyp-1.845049)

## When should or should not be a link

Most of the times, the logotype should be inside a link to either [kth.se](https://kth.se), [intranet](https://intra.kth.se) or [student web](https://kth.se/student).

In some cases, you should not do it. For example:

- A page where users should not leave. For example: waiting for payment.
- An app where users should not leave in any intermediate step. For example: account activation.

## How it works

- Serve the image assets in your app according to the [get started guide](../get-started/developers)
- Place this component inside `kth-header`

### Without link

Use this if the logotype does not include a link anywhere.

- The `alt` attribute should include "KTH", "KTH Royal Institute of Technology" or synonyms. Avoid using words like "logotype", "image".
- The `alt` attribute should be localized

<iframe src="/style/en/examples/logotype/without-link"></iframe>

<details class="kth-details">
<summary>Code</summary>

<div class="kth-details__content">

```html
<figure class="kth-logotype">
  <img
    alt="KTH"
    srcset="
      <ASSETS_DIRECTORY>/kth-logotype-64.webp,
      <ASSETS_DIRECTORY>/kth-logotype-64@2x.webp 2x,
      <ASSETS_DIRECTORY>/kth-logotype-64@3x.webp 3x
    "
    src="<ASSETS_DIRECTORY>/kth-logotype-64.png"
  />
</figure>
```

```scss
@use "@kth/style/scss/components/header.scss";
```

</div>
</details>

### With link

Use this if the logotype does inlcude a link.

- The link should go to either [kth.se](https://kth.se), [intranet](https://intra.kth.se) or [student web](https://kth.se/student).
- The `alt` attribute should indicate the action of the link. For example: "Go to kth homepage"
- The `alt` attribute should be correctly localized

<iframe src="/style/en/examples/logotype/with-link"></iframe>

<details class="kth-details">
<summary>Code</summary>

<div class="kth-details__content">

```html
<a class="kth-logotype">
  <figure>
    <img
      alt="KTH"
      srcset="
        <ASSETS_DIRECTORY>/kth-logotype-64.webp,
        <ASSETS_DIRECTORY>/kth-logotype-64@2x.webp 2x,
        <ASSETS_DIRECTORY>/kth-logotype-64@3x.webp 3x
      "
      src="<ASSETS_DIRECTORY>/kth-logotype-64.png"
    />
  </figure>
</a>
```

```scss
@use "@kth/style/scss/components/header.scss";
```

</div>
</details>

### Multi-site logotype

In some cases, you need to use CSS to choose one logotype or the other.

- Render both versions using the classes `blue` and `white` in the `img` tag.
- The [header component](./header) with the correct class (`.external`, `student-web` or `intranet`) will show only one of the logos.

<details class="kth-details">
<summary>Code</summary>

<div class="kth-details__content">

```html
<figure>
  <img
    class="blue"
    alt="{alt}"
    srcset="
      /style/assets/kth-logotype-blue.webp,
      /style/assets/kth-logotype-blue@2x.webp 2x,
      /style/assets/kth-logotype-blue@3x.webp 3x
    "
    src="/style/assets/kth-logotype-blue.png"
  />
  <img
    class="white"
    alt="{alt}"
    srcset="
      /style/assets/kth-logotype-white.webp,
      /style/assets/kth-logotype-white@2x.webp 2x,
      /style/assets/kth-logotype-white@3x.webp 3x
    "
    src="/style/assets/kth-logotype-white.png"
  />
</figure>
```

</div>
</details>

## Read more

- [Add alt text to image used alone as linked logo (W3C, external web)](https://www.w3.org/WAI/tutorials/images/functional/#example-1-image-used-alone-as-a-linked-logo)
- [Alt text for logos (Web AIM, external web)](https://webaim.org/techniques/alttext/#logos)
