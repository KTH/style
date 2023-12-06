---
layout: "@layouts/Page.astro"
title: "Header tools"
---

# Header tools

<p class="lead">Add most frequent tools in the header in the same place as other services at KTH</p>

## When to use

- To add search and language tools.
- Tools that are available in all services must be placed consistently.

## When not to use

- To add any other tool

## How to use

### Placement and styling

- The tools must be in the header, within `kth-header__tools`.

<details>
<summary>Code</summary>
<div>

See full header in the [Header component](/style/en/components/header).

```html
<ul class="kth-header__tools">
  <!-- tools must be here -->
</ul>
```

</div>
</details>

### Language button

For the markup, use always `<a>` or `<button>`.

- Use `<a>` if the language **and** the URL changes
- Use `<button>` if the language changes without changing the URL

Regardless of your choice, make sure:

1. The text in the link or button should be the name of the target language, not the language in the current page. Example: If the link changes the page to English, it should say "English"

2. The text should be in its language. Write "English" or "Svenska", not "Engelska" nor "Swedish".

3. For both `button` and `a`, use the `lang` attribute to specify the language of the text in the button

   <details>
   <summary>Explanation</summary>
   <div>

   The `lang` attribute in the `<html>` tag tells what is the language for the entire document.

   If the _document language_ is in English (`<html lang="en">`), this button says "Svenska" (as of the previous points).

   You should indicate that this particular text ("Svenska") is not in English (the _document language_) by adding the attribute (`lang="sv"`) to the `button` or `a`

   </div>
   </details>

4. (Optional). If you are using a `a` tag, add the `hreflang` to tell search engines that the link goes to a translated version
5. Do not use `aria-label`, `title` or anything that overrides the content.
6. Attributes `aria-describedby`, `aria-description` are not needed.

Use the classes `kth-menu-item` and `language` to style it correctly

<details>
<summary>Code</summary>
<div>

```html
<a href="" class="kth-menu-item language">
  <span>English</span>
</a>
```

</div>
</details>

### Search button

> [!Note] The search widget is under development

## Read more

- [Internationalization guide, KTH Style](/style/en/guides/i18n)
- [Language of Parts (Understanding WCAG SC 3.1.2, external web)](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html)
