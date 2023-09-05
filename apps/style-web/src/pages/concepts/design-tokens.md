# Design tokens

## What are design tokens

Design tokens as defined by different design systems like Material Design or Adobe Spectrum, are design decisions translated into data. They are a shared language between design and code.

Tokens consists of values needed to build and maintain a design system, such as spacing, color, typography and more. They can represent anything that has a design definition like a color as a RGB value, an opacity as a number or a padding as a value in rem units.

## Definitions

- **Token**. A variable representing a design decision. Each token has a carefully chosen name that communicates its intention and follows a naming convention
- **Value**. Is the value held by the token. It can be another token or a primitive:

  ```scss
  // A Sass variable containing a primitive
  $color-blue-kth: #004791;

  // A CSS variable containing a Sass variable
  --primary-background-color: #{$color-blue-kth};
  ```

## Types of tokens

- **Reference tokens**. All available tokens in KTH Style.
- **Semantic tokens**. Decisions and semantic roles.

Note: there are other design systems that defines more than 2 types of tokens (Material Design defines 3 types, Adobe Spectrum defines up to 4).

### Reference tokens

Reference tokens are coded in KTH Style as Sass variables. They comprise all of the style options available in KTH Style.

- They usually point to a primitive value
- The name of those tokens represents the value but not how to use it.

### Semantic tokens

Semantic tokens are coded in KTH Style as CSS variables. They are decisions that systematize the design language for a specific theme or context.

These tokens define the purpose that a reference token serves in the UI.

- They contain other tokens as value, usually reference tokens
- The name represents a role and a specific property (e.g. "primary background")
- Their value might be different depending on the context, such as intranet vs external web

## Contexts

Semantic tokens can hold different values depending on their context. Examples of different contexts:

- Dense layouts
- Dark theme
- Location (intranet, external web, student web)

When switching contexts, several tokens change their value at the same time. For example, changing a layout to dense might affect paddings and font-size; switching to intranet might change a background color and text color.

<!--

# Implementation

KTH Style defines all primitives

```scss
$color-sand: #e6e1dd;
$color-blue-kth: #004791;
$color-blue-light: #e0edfc;
$color-blue-sky: #6298d2;
$color-blue-marine: #08004f;
$color-blue-digital: #221dd9;
```

KTH Style defines also semantic tokens. Since there is no way in CSS to "declare" a variable, the "definition" is done in `:root`. Default values are provided there.

```scss
:root {
  /* This is the background color for UI elements in its "primary" appearance */
  --primary-background-color: #{$color-blue-kth};

  /* This is the text color for UI elements in its "primary" appearance */
  --primary-text-color; #{$color-white};
}
```

Components (both defined by KTH Style and defined by other developers), for example Primary Button, reads

```scss
button.primary {
  background: var(--primary-background-color);
  color: var(--primary-text-color);
}
```

This button will have `$color-blue-kth` background and `$color-white` text color.

```html
<button class="primary">Hello world</button>
```

KTH Style also defines mixins to switch between themes. For example, header at kth.se uses an "inverse" mode, meaning a different combination of colors. In this case, primary buttons will have (among other things) white background with blue text:

```scss
@mixin theme-inverse {
  --primary-background-color: #{$color-white};
  --primary-text-color: #{$color-blue-kth};
}
```

An application, can use the mixin above to change the theme in the header:

```scss
// Include this only in kth.se, not in intranet
#mainHeader {
  @include theme-inverse;
}
```

Without anything else, a button _inside_ the `mainHeader` will use the inverse theme:

```html
<body>
  <button class="primary">Hello world</button>
  <header id="mainHeader">
    <button class="primary">Hello</button>
  </header>
</body>
```

-->
