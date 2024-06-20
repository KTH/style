---
layout: "@layouts/Page.astro"
title: "Screen resolution and browser support"
---

# Screen resolution and browser support

<p class="lead">Read what browsers and devices are supported by KTH Style and which ones should you support</p>

## General ideas

As a principle: avoid negative impact to all users; prefer to give the best experience to users with modern browsers and most used devices

When writing code or designing, make a decision based on the negative impact for users:

1. Accessibility or major usability issues. For example, a button is unusable or users cannot perform a task.

   You should minimize this, especially if it causes failures in accessibility guidelines

2. Minor usability or aesthetic issues (users can use the app but it might not _look_ great). For example: an image is misaligned.

   It is ok if some users perceive defects. Avoid polyfills or "hacks" to increase support

## Screen resolution

1. No accessibility or major usability issues should be present in screen widths from 320px to 1280px.

   - In particular, content (except bi-dimensional objects like tables, diagrams and maps) should be visible without horizontal scrolling in screen widths from 320px and 1280px, according to [Success Criteria 1.4.10 Reflow (AA) in WCAG 2.1 guidelines](https://www.w3.org/WAI/WCAG21/Understanding/reflow).
   - Remember to test _all_ screen sizes from 320px to 1280px, not only the minimum and maximum

   > [!NOTE]
   > Do not make the assumption "small device = mobile". Users with large screens using _browser zoom_ view the version for small devices

2. Layouts should be designed (should "look good") for screen widths between 360px and 1280px

   - This value is based on [KTH analytics](https://analytics.sys.kth.se/).
   - These values can be different in some scenarios. E.g.: apps for administration are often accessed with computers with mouse and keyboard inputs.

### Example: header at KTH

The header at KTH should work for all resolutions above 320px. The menu list implements flexbox with `flex-wrap` to avoid horizontal scrolling:

[TODO]

The header should look good for resolutions above 360px. The margins are adjusted to avoid multilined menu items:

[TODO]

## Browser support

1. Use always features supported in all stable versions of core browsers.
2. Do not use features marked as [experimental, deprecated or obsolete by MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete). For example, do not use [`virtualkeyboardpolicy`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)
3. No accessibility nor major usability issues should be present for users using a browser that is less than 24 months old
4. It is ok to offer a slightly degraded experience for users that have browsers older than 6 months.

   Avoid using polyfills or "hacks" to force an optimal experience to all users

Core browsers, at the time of writing, are:

- Chrome for desktop
- Firefox for desktop
- Safari for desktop
- Edge for desktop
- Chrome for Android
- Firefox for Android
- Safari for iOS

The values in this section (including the definition of core browsers) are based on

- Usage data collected in [KTH analytics](https://analytics.sys.kth.se)
- The Web Platform Baseline initiative described below

### Web Platform Baseline

[Baseline](https://web.dev/baseline) is an project created by the [Web DX Community Group](https://www.w3.org/blog/2022/webdx-improving-the-experience-for-web-developers/) in collaboration with major browser vendors (Apple, Google, Microsoft and Mozilla). It classifies features in two stages:

- **Newly available** means a feature supported by all core browsers
- **Widely available** means a feature is supported by all core browsers since at least 30 months.

Baseline information is displayed for example in [some pages on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and even in [caniuse.com](https://caniuse.com/css-grid)
