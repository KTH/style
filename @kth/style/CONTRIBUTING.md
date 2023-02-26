# Contribution guide

If you are reading this guide, thanks for your interest in contributing to the project!

## Getting started

1. Clone the repository

   ```sh
   git clone ...
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Launch Storybook

   ```sh
   npm run dev
   ```

4. Go to http://localhost:6006 to see the component gallery

## What is included in `@kth/style`?

This package includes Sass files with styles and React components. Those are the relevant directories:

- `/scss` with the Sass files. They are included in the npm package as they are, without compiling.
- `/dist` with the compiled React components, i.e., JavaScript files and type declarations.
- `/src/` with the source React components, TypeScript files. They are _not_ included in the npm package.
  - `/components/` contains all React components.
  - `/stories/` contains the Storybook stories.
- `/scripts/` contains helper scripts used internally. They are _not_ included in the npm package.

Other files and directories:

- `.storybook` configuration for the Storybook framework.
- `tsconfig.json` and `tsconfig.node.json`. TypeScript configuration.
- `vite.config.ts` configuration for Vite
