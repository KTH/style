---
title: Button and link
layout: "@layouts/Page.astro"
---

# Button and link

## When to use this component

You can style `<a>` as buttons and `<button>` as links. In all cases, make sure you choose the correct HTML element:

- Use `button` when you need to create buttons for user interactions, such as submitting a form or triggering an action
- Use `a` for navigating to a different page.

Here are some tips to help you decide between `<a>` or `<button>`:

- Use `<button>` instead of links that go nowhere. Avoid `href="#"`, `href="javascript:void(0)"` or similar
- Quick test for `<a>` tags: try to open the link in a new tab. If the opened page does not make any sense or is the same as the page you were before, you probably want to use `<button>` instead.

## How it works

### Call to action buttons

Use primary and secondary buttons for the call actions on a page or to start a service.

- Use a verb in imperative form for the label

#### Primary button

Use primary button for the main call to action on a page. Avoid using multiple primary buttons because it reduces their impact.

<iframe src="/style/en/examples/button/primary"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<a href="#" class="kth-button primary">Primary link</a>
<button class="kth-button primary">Primary Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

#### Secondary button

Use secondary buttons for secondary call to actions on a page.

<iframe src="/style/en/examples/button/secondary"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<a href="#" class="kth-button secondary">Secondary link</a>
<button class="kth-button secondary">Secondary Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

#### Grouping primary and secondary buttons

TODO

---

### Buttons for "wizard-style" navigations

Use these buttons in a multi-step service.

#### Previous button

- Make sure that the label makes sense even for people who cannot see the icon.
- We recommend the label "Back to [___]"

<iframe src="/style/en/examples/button/previous"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-button previous">Previous Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

#### Next button

- For the label, use a verb that describes the next step. For example "Preview page". Avoid redundancies such as "See the preview of the page".
- You don't need to include "Continue to" in the button.

<iframe src="/style/en/examples/button/next"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-button next">Next Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

#### Success button

Use success button to indicate the end of a step-by-step process

- Users cannot come back to the current step after pressing the button
- If the action does something relevant, make sure to indicate it. Use the [TODO] Confirm modal component if the action is very relevant

<iframe src="/style/en/examples/button/success"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-button success">Success Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

---

### Special buttons

Use these buttons for specific things

### Back button

Use it to go to the parent page in the website hierarchy or to leave the service

<iframe src="/style/en/examples/button/back"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-button back">Back Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

### Close button

Use it to close a dialog, a menu or panel.

- Use `.kth-visually-hidden` class to render a label for the button
- Make sure to translate the label properly ("Close" in English, "Stäng" in Swedish)

<iframe src="/style/en/examples/button/icon"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-icon-button close">
  <span class="kth-visually-hidden">{"close"}</span>
</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

---

### Other buttons

These buttons are usually not needed

#### Error button

<iframe src="/style/en/examples/button/error"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<button class="kth-button error">Error Button</button>
```

```scss
@use "@kth/style/scss/components/button.scss";
```

</div>
</details>

## Read more

- TODO
