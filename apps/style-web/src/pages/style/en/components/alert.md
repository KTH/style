---
title: Alert
layout: "@layouts/Page.astro"
---

# Alert

<p class="lead">Give usage guidance, notify users of action results or warn them about potential issues or failures</p>

## When to use this component

Use alert to inform users that something important has happened or will happen. It can for example be used for system status messages or validation messages.

## When not to use this component

- Do not use the alert for validation of long forms.

  - For long forms, always include in-line validation in addition to any error messages that appear at the top of the form.

- Do not use the alert component for destructive actions.
  - If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialog, to allow the user to confirm that this action is what they want.

## How it works

There are three different types of alerts, which are based on the severity of the alert. What differs between them is the color of the border and the icon that they display. Except from the color and icon, they behave and look the same.

To create an alert, create a `<div>` with the class name `kth-alert` along with a class name for the severity (`info`, `warning` or `success`). All alerts should contain text that clearly describes the alert. This is done by adding a `<p>` with the text in the `<div>`. It is optional to also add a headline to the alert. To add a headline, a `<h2>`, `<h3>` or `<h4>` is added at the top in the `<div>`.

### Info alert

The info alert is intended to be used when we want to give the user information that is neither positive nor negative, but purely informative. It has a blue border color and an icon that looks like the letter i.

The info alert uses the class name `info` in combination with the base class name `kth-alert`.

<iframe src="/style/en/examples/alert/info"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<div class="kth-alert info">
  <h2>An informative alert</h2>
</div>
```

```scss
@use "@kth/style/scss/alert/info.scss";
```

</div>
</details>

### Warning alert

The warning alert is intended to be used when we want to inform the user about something critical or potentially negative. It has a red border color with a warning icon.

The warning alert uses the class name `warning` in combination with the base class name `kth-alert`.

<iframe src="/style/en/examples/alert/warning"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<div class="kth-alert warning">
  <h2>An alert that warns the user about something</h2>
</div>
```

```scss
@use "@kth/style/scss/components/alert.scss";
```

</div>
</details>

### Success alert

The success alert is intended to be used when we want to give the user information about something positive, possibly that an operation has succeeded. It has a green border color and a check mark as the icon.

The success alert uses the class name `success` in combination with the base class name `kth-alert`.

<iframe src="/style/en/examples/alert/success"></iframe>

<details>
<summary>Code</summary>

<div>

```html
<div class="kth-alert success">
  <h2>An alert that informs the user about something successful</h2>
</div>
```

```scss
@use "@kth/style/scss/components/alert.scss";
```

</div>
</details>
