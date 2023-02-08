# KTH Style library

Styles and components used across KTH. Components are written in Sass (SCSS) and React with TypeScript.

## Pre-requirements

- React 18. _It might work with React 17 but is not guaranteed_
- Sass

## Getting started

1. Install the library

   ```sh
   npm i @kth/style
   ```

2. TypeScript/JavaScript. Create a component:

   ```ts
   import { Button } from "@kth/style/components/Button";

   export function HelloWorld() {
     return <Button>Hello World</Button>;
   }
   ```

3. Sass. Import the Sass files

   ```scss
   @use "node_modules/@kth/style/scss/components/Button";
   ```

## Contribute to KTH Style

Read [CONTRIBUTING.md](./CONTRIBUTING.md)
