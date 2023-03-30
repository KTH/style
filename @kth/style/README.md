# @kth/style

**WORK IN PROGRESS**. Styles and components used across KTH.

## Structure

- `/scss` contains Sass files. This will be published (in npm), apps can import these files.
- `/src` contains things that will be compiled. Not published in npm
- `/dist` (generated, git-ignored) contains compiled things from `src`. Will be published (in npm), apps can import these files.
- `/stencil.config.ts` and `tsconfig.json` are configuration files for the compilation from `src` to `dist`.

### `/scss` directory.

This directory includes Sass files ready to be imported by both components made by this library and external apps.

At this moment, anything inside this directory generate any CSS at all. For example:

- Values for paddings are exported as Sass variables, not as classes, which means that apps decide what classes to have.
- The "reset" is exported as a Sass mixin, not as CSS declaration, which means that apps decide in which scope does the reset apply.
