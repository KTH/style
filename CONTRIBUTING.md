# Contribution guide

> **Warning**
> We are still working on this guide, take it with a pinch of salt.

Thanks for your interest in contributing to KTH Style!

## How can you contribute

### Documentation

If you want to improve our documentation, here you can find each type of document:

- Documentation for _code_ is in this repository. You can find it in `packages/@npm/style` usually very close to the documented code. This documentation is written in MDX

### Components

You can create a new component or edit an existing one. In that case:

Create a directory for the component: `packages/@npm/style/components/<your component>/`

Inside such directory include the following files:

- `index.tsx`, entry point of the component
- `index.module.scss`, styles for the component
- `index.mdx`, documentation for the component written in MDX
- `index.test.ts`, tests for the component

> **Note**. Recommendations for each of those files will come

## Pull Request when the code is ready

If you want to propose changes to the codebase:

1. Create a branch or fork the repo.
2. Create a Pull Request with your code.
3. (optional) if you want to use your code immediately, create a new _prerelease_ version of KTH Style. Use `npm version` for that:

   ```sh
   npm version [premajor | preminor | prepatch]
   ```

   Example:

   ```sh
   # If current version is 1.0.0, this command will create a tag with
   # version `1.1.0-0`
   npm version preminor

   # This will create a version `1.1.0-e-larande.0`
   npm version preminor --preid e-larande
   ```

   Note: we don't guarantee that your code will be merged exactly as you write it. Make sure to adapt your code when upgrading from a prerelease version to a release
