# Header menu item

Show an option in the [Header](./header.md).

## When to use

Use it only to actionable items in the header component. Check also:

- [Header panel component](./header-panel.md)
- [Header component](./header.md)

## How to use

Include the Sass files that contains the required CSS classes:

```scss
@use "@kth/style/scss/components/header-menu-item";
```

Use the CSS class `kth-header-menu-item` in `<a>` or `<button>`

```html
<a href="/" class="kth-header-menu-item">
  <span>Undervisning</span>
</a>
```

### Without icon

```html
<a href="/" class="kth-header-menu-item">
  <span>kth.se</span>
</a>
```

### With a search icon

```html
<a href="/" class="kth-header-menu-item search">
  <span>Sök</span>
</a>
```

### As a dropdown

```html
<button class="kth-header-menu-item dropdown">
  <span>Undervisning</span>
</button>
```

### With a "globe" icon

```html
<a href="/" class="kth-header-menu-item globe">
  <span>English</span>
</a>
```
