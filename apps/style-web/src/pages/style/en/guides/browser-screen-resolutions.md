---
layout: "@layouts/Page.astro"
title: "Screen resolution and browser support"
---

# Screen resolution and browser support

<p class="lead">Read what browsers and devices are supported by KTH Style and which ones should you support</p>

## General ideas

As a principle: avoid negative impact to all users; prefer to give the best experience to users with modern browsers and most used devices

This document uses

When writing code or designing, make a decision based on the negative impact for users:

1. Accessibility or major usability issues. For example, a button is unusable or users cannot perform a task.

   You should minimize this, especially if it causes failing accessibility guidelines

2. Minor usability or aesthetic issues (users can use the app but it might not _look_ great). For example: an image is misaligned.

   Prioritize users with modern browsers

## Screen resolution

No accessibility or major usability issues should be present in screen widths from 320px to 1280px.

- In particular, content (except bi-dimensional objects like tables, diagrams and maps) should be visible without horizontal scrolling in screen widths from 320px and 1280px, according to [Success Criteria 1.4.10 Reflow (AA) in WCAG 2.1 guidelines](https://www.w3.org/WAI/WCAG21/Understanding/reflow).
- Remember to test _all_ screen sizes from 320px to 1280px, not only the minimum and maximum

> [!NOTE]
> Do not make the assumption "small device = mobile". Users with large screens using _browser zoom_ view the version for small devices

Layouts should be designed (should "look good") for screen widths between 360px and 1280px

- This value is based on [KTH analytics](https://analytics.sys.kth.se/).
- Users in particular apps use different devices. E.g.: apps for administration are often accessed with computers with mouse and keyboard inputs

## Browser support

- Do not use features marked as [experimental, deprecated or obsolete by MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete). For example, do not use [`virtualkeyboardpolicy`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)
- No accessibility nor major usability issues should be present in any core browser (Chrome, Firefox, Safari and Edge for desktop, Chrome for Android, Firefox for Android and Safari for iOS) released in the **past 24 months**.
- Things should look good for all major browsers released in the last **6 to 12 months**. Do not use polyfills to increase browser support.

> [!NOTE]
> The important date is the date when a feature became available in _all_ core browsers.

Use initiatives like Baseline to understand which features are safe to use

### Web Platform Baseline

[Baseline](https://web.dev/baseline) is an project created by the [Web DX Community Group](https://www.w3.org/blog/2022/webdx-improving-the-experience-for-web-developers/) in collaboration with major browser vendors (Apple, Google, Microsoft and Mozilla).

- **Baseline newly available** means a feature supported by all core browsers
- **Baseline widely available** means a feature is supported by all core browsers since at least 30 months.

You can find "Baseline" information for example:

- [When checking a property in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [When checking a property in caniuse.com](https://caniuse.com/css-grid)

## Example: header at KTH

The header at KTH should work for all resolutions above 320px. The menu list implements flexbox with `flex-wrap` to avoid horizontal scrolling:

[TODO]

The header should look good for resolutions above 360px. The margins are adjusted to avoid multilined menu items:

[TODO]
