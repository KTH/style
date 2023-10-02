---
title: Logotype (in header)
layout: "@layouts/Page.astro"
---

# Logotype (in header)

## When to use this component

- To show that your service is part of KTH.
- Inside the header when building a full-page app.

## When not to use this component

- Do not use it for widgets or inside `<iframe>`
- The image assets in this component are optimized **exclusively** for the KTH header. For other uses, get the logotype from the [KTH graphical profile](https://intra.kth.se/en/administration/kommunikation/varumarke/grafiskprofil/logotyp-1.845049)

## How it works

- Serve the image assets in your app according to the [get started guide](../get-started//developers.md)
- Place this component inside `kth-main-header`

### Without link

Use this if the logotype does not include a link anywhere.

- Accessibility: the `alt` attribute should only include the sentences "KTH" or equivalents. Avoid using "logotype", "image"

<iframe src="/style/en/examples/main-header__logotype/without-link"></iframe>

### With link

Use this if the logotype does inlcude a link.

- The link should go to either [kth.se](https://kth.se), [intranet](https://intra.kth.se) or [student web](https://kth.se/student).
- Accessibility: the `alt` text should indicate the action of the link, not its content.
- Accessibility: make sure the `alt` text is correctly localized

<iframe src="/style/en/examples/main-header__logotype/with-link"></iframe>

```html
<a href="https://kth.se" class="kth-main-header__logotype">
  <figure>
    <img
      alt="Gå till kth.se"
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

CSS is included as part of `kth-main-header`

```scss
@use "@kth/style/scss/components/kth-main-header";
```

## Read more

- [Add alt text to image used alone as linked logo (W3C, external web)](https://www.w3.org/WAI/tutorials/images/functional/#example-1-image-used-alone-as-a-linked-logo)
- [Alt text for logos (Web AIM, external web)](https://webaim.org/techniques/alttext/#logos)
