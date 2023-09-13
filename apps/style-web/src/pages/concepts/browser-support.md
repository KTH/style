# Browser compatibility

Here you can read KTH Style position when it comes to browser compatibility

## Definitions

Different browsers have different release patterns and adopt web platform features at different paces. Therefore, we need to start by defining some concepts:

- **Major browsers**. We consider major browsers: Google Chrome, Edge, Safari and Firefox for desktop, Android Apple non-desktop devices.

- **Standard feature**. TL;DR: if MDN says it is standard (non deprecated, non experimental), then it is a standard

  <details>We adopt the most common definition of standarization. We consider a web platform feature to be _standard_ when it is included in their respective specification documents, i.e. CSS, HTML, JavaScript and DOM. When a feature involves more than one specification (for example a CSS property and a way to access it from the DOM), it is considered standard when all its parts are standarized.</details>

- **Stable version**. General available version of a browser. It excludes beta, nightly and dev channels

Given the definitions above we can define web platform features as follow:

- **Stable feature**: the feature is standard and available in the latest stable versions of all major browsers.
- **Feature stabilization date**: the date when the feature became _stable_ according to the definition above. Example:

  [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) includes, among others the CSS `@container` at-rule, the CSS properties `contain`, `container`, `container-name` and `content-visibility`.

  The following table shows the date when the `@container` at-rule was released by each major browser

  | Browser availability | Release date |
  | -------------------- | ------------ |
  | Chrome               | 2022-09-02   |
  | Edge                 | 2022-09-01   |
  | Firefox              | 2023-02-14   |
  | Safari               | 2022-09-12   |

  Theferore, the stabilization date for this feature is `2023-02-14`

## KTH Style position

When adding a feature into your app that needs a recently stabilized feature, consider what are the consequences if the browser does not support it:

1. Essential features. When broken, they cause major accessibility or usability issues. For example, a user might not be able to complete a task or a button is unusable

   In this case, do not add the feature until it has been stable for _long_ time. For example 2 years

2. Non-essential features. When broken, users can still use the app but it might not _look_ that great. For example: an image is mis-aligned or users see a "mobile" version of a component in big screens

   In this case, it is ok to add the feature if it has been stable for around _half a year_

   We **DO NOT** recommend adding polyfills, or extra code (usually JavaScript) only to add backwards compatibility for those features

Keep in mind that the same feature depending on the component might be more or less essential.

We think that this criteria makes sure that everyone can use our apps and services, but it works and looks better for those who have latest browsers.

## Some examples

### CSS subgrid

Example:

```css
.selector {
  display: grid;
  grid-template-columns: subgrid;
}
```

| Standard | Chrome/Edge  | Firefox    | Safari     |
| -------- | ------------ | ---------- | ---------- |
| Yes      | experimental | 2019-12-10 | 2022-09-12 |

This feature is not stable yet. You should not use it in essential nor non-essential features

### Responsive images (`srcset` and `<picture>`)

Example:

```html
<picture>
  <img srcset="image.jpg, image@2x.jpg 2x, image@3x.jpg 3x" />
</picture>
```

| Standard | Chrome/Edge | Firefox    | Safari     |
| -------- | ----------- | ---------- | ---------- |
| Yes      | 2014-04-08  | 2015-05-12 | 2014-10-16 |

This feature is generally available from 2015. You can use it for essential and non-essential features

### JavaScript import maps

```html
<script type="importmap">
  // JSON object defining import
</script>
```

| Standard | Chrome/Edge | Firefox    | Safari     |
| -------- | ----------- | ---------- | ---------- |
| Yes      | 2021-03-02  | 2022-12-13 | 2023-03-27 |

This feature is stable from 2023-03-27. You can use this for non-essential features.
