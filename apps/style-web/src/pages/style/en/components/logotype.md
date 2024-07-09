---
title: Logotype (in header)
layout: "@layouts/Page.astro"
---

# Logotype (in header)

<p class="lead">Make clear to users that they are within KTH</p>

## When to use this component

- Inside the [header](/style/en/components/header) when building a full-page app.

## When not to use this component

- Do not use it for widgets or inside `<iframe>`
- The image assets in this component are optimized **exclusively** for the KTH header. For other uses, get the logotype from the [KTH graphical profile](https://intra.kth.se/en/administration/kommunikation/varumarke/grafiskprofil/logotyp-1.845049)

### Multi-site logotype
No CSS is used to dynamically render the logo. 

- Use single img tag in template.
- The [header component](/style/en/components/header) should display only one logo based on its theme class (`.external`, `student-web` or `intranet`). This rendering should be dynamic and is typically managed within a controller or similar backend logic.
- To achieve conditional rendering of the logotype you can use the npm package [KTH-node-web-common] (https://github.com/KTH/kth-node-web-common/blob/main/README.md) (helper "conditionalLogotypeSrc" ) or similar logic. 

<details>
<summary>Code</summary>

<div>

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
    src="/<ASSETS_DIRECTORY>/logotype/{src}" [Note: Dynamically render logotype-blue.svg&#47;logotype-white.svg] />
</figure>
```

</div>
</details>


## When should or should not be a link

Most of the times, the logotype should be inside a link to either [kth.se](https://kth.se), [intranet](https://intra.kth.se) or [student web](https://kth.se/student).

In some cases, you should not do it. For example:

- A page where users should not leave. For example: waiting for payment.
- An app where users should not leave in any intermediate step. For example: account activation.

## How it works

- Serve the image assets in your app according to the [get started guide](/style/en/get-started/developers)
- Place this component inside `kth-header`

### Without link

Use this if the logotype does not include a link anywhere.

- The `alt` attribute should include "KTH", "KTH Royal Institute of Technology" or synonyms. Avoid using words like "logotype", "image".
- The `alt` attribute should be localized

<iframe src="/style/en/examples/logotype/without-link"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<figure class="kth-logotype">
  <img
    class="blue"
    alt="{alt}"
    width="64"
    height="64"
    src="/<ASSETS_DIRECTORY>/logotype/{src}" [Note: Dynamically render logotype-blue.svg&#47;logotype-white.svg]
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

<details>
<summary>Code</summary>

<div>

```html
<a href="/" class="kth-logotype">
  <figure>
    <img
      alt="{alt}"
      width="64"
      height="64"
      src="/<ASSETS_DIRECTORY>/logotype/{src}" [Note: Dynamically render logotype-blue.svg&#47;logotype-white.svg]
    />
  </figure>
</a>
```

```scss
@use "@kth/style/scss/components/header.scss";
```

</div>
</details>

## Read more

- [Add alt text to image used alone as linked logo (W3C, external web)](https://www.w3.org/WAI/tutorials/images/functional/#example-1-image-used-alone-as-a-linked-logo)
- [Alt text for logos (Web AIM, external web)](https://webaim.org/techniques/alttext/#logos)
