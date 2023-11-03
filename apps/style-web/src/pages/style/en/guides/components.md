# What is a good component?

## Use the right HTML semantics

Before adding any style, ensure your page has the correct HTML semantics, which contributes to usability and accessibility. To learn more about when to use which HTML tag, you can get some inspiration:

- KTH Style components
- WAI-ARIA widgets
- MDN and Web.dev

## Use JavaScript correctly

### Events

Use exclusively `click` events (or `submit` in forms) when the action is a big context switch: to redirect users to a different page, when a big part of the page changes. Avoid any other event (keyboard, scroll, mouse, etc.)

You can use other events if they are not disturbing and they provide clear usability or accessibility benefits:

- A scroll down makes the header smaller
- Hovering a menu triggers a prefetch (in the background)
- Typing a few characters in a text fields show autocomplete suggestions

### Error handling
