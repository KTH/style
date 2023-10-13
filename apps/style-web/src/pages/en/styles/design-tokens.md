# Design tokens

## What are design tokens

- Design token is a concept defined by different design systems like [Material Design](https://m3.material.io/foundations/design-tokens/overview) or [Adobe Spectrum](https://spectrum.adobe.com/page/design-tokens/).
- Design tokens are design decisions translated into data. They are a shared language between design and code.
- Tokens consists of values needed to build and maintain a design system, such as spacing, color, typography and more. They can represent anything that has a design definition like a color as a RGB value, an opacity as a number or a padding as a value in rem units.

## Definitions

- **Token**. A variable representing a design decision. Each token has a carefully chosen name that communicates its intention and follows a naming convention
- **Value**. Is the value held by the token. It can be another token or a primitive:

  ```scss
  // A Sass variable containing a primitive
  $color-blue-kth: #004791;

  // A CSS custom property containing a Sass variable
  --color-primary: #{$color-blue-kth};
  ```

## Types of tokens

- **Reference tokens**. All available tokens in KTH Style.
- **Semantic tokens**. Decisions and semantic roles.

Note: other design systems define more than 2 types of tokens: Material Design defines 3 types; Adobe Spectrum up to 4.

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

## Naming convention

Naming convention for tokens

```
<category>-<names>
```

Where:

- `<category>` is a name that groups several tokens like `color`, `font` or `layout`
- `<names>` (separated with dashes) identifies the token uniquely. Add all words needed to describe uniquely a token

Examples:

```
$color-blue-kth
$color-white
$space-4
--color-primary
```

## Contexts

Semantic tokens can hold different values depending on their context. Examples of different contexts:

- Dense layouts
- Dark theme
- Location (intranet, external web, student web)

When switching contexts, several tokens change their value at the same time. For example, changing a layout to dense might affect paddings and font-size; switching to the "intranet theme" might affect the background color and text color.
