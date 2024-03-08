# Contributing to KTH Style

Thanks for your interest in contributing to KTH Style!

> [!Note]
> This guide is aimed for developers. Guides for other forms of contribution will come later.

## Who can contribute

At this moment we only accept contributions from people within the IT department at KTH.

## Quick guide

### Prerequisites

```
node: ">=20"
npm: ">=9"
```

### Setting up your local repo

KTH Style uses [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) so you should run `npm install` from the top-level project directory, which will install dependencies for every package in the repo.

```
git clone && cd ...
npm install
```

## Development

```sh
# Starts "dev" mode with file-watching, live-reloading, etc.
npm run dev

# Build the entire project, one time
npm run build
```

> [!Tip]
> You can also run the commands from each directory `/@kth/style` or `apps/style-web`

### Structure

The two big things in this repository are the **KTH Style library** and the **KTH Style documentation website**

- `@kth/`: npm packages.
  - `style/`: the KTH Style library.
  - `rehype-github-blockquotes`: internal package (not published in npm) to support "github style blockquotes".
- `apps/`: applications
  - `style-web/`: KTH Style documentation website

The KTH Style library has the following structure. The main directories are `scss/` and `src/`

- `assets/`: static files like fonts and the logotype, ready to use "as they are"
- `icons/`: SVG files exported directly from Figma
- `scripts/`: utilities
- `scss/`: styles written in [Sass (SCSS)](https://sass-lang.com)
  - `components/` CSS for each component
  - `tokens/` design tokens (variables and mixins)
  - `utils/` diverse utilities written in Sass
- `src/`: TypeScript files
  - `index.ts` exports all JavaScript non-react components
  - `react.ts` exports all React components
  - `components/` non-React components
  - `react-components/` React components

### Use local KTH Style in your project

During development you might want to use the local version `@kth/style` in a project to check that everything works.

```sh
# Run the following command from the `style` repository
npm link --workspace @kth/style

# Run this command in your project to use local @kth/style:
npm link @kth/style
```

For any questions, reach us in the [KTH Slack channel #vs-it-ux](https://kth-se.slack.com/archives/C06K0G9BQUE).

## Releasing

### Releasing KTH Style library

> [!Note]
> Only teams with admin priviledges can do releases of `@kth/style`

1. Bump version manually

   ```sh
   # Run the following command from the `main` branch
   # and the top-level directory
   npm run version
   ```

   The code will automatically: create a new git tag, bump the `version` in `package.json` for `@kth/style`, push the tag and code to github.

2. Azure Pipelines will test and publish KTH Style library into npm.

### Releasing KTH Style documentation

Updates to the KTH Style documentation website are done automatically using Azure Pipelines
