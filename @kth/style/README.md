# @kth/style

Styles and components used across KTH.

Documentation available in the [KTH Style website](https://kthstyledemoprod.z6.web.core.windows.net/style)

## Structure

```
@kth/style
├── src/
│   ├── index.ts
│   ├── components
│   └── react-components
├── scss/
│   ├── components
│   ├── tokens
│   └── utils
├── assets
├── ...
├── package.json
└── rollup.config.mjs
```

- `scss` contains all CSS. Those can be imported as they are
- `src` contains source for JavaScript components. Written in JavaScript
  - `src/components` are the components that do not use React
  - `src/react-components` are the React components
  - `index.ts` and `react.ts` re-export the content in the respective `components` directories
- `assets` are static assets like the fonts and logotype. This is meant to be exposed by apps using KTH Style
