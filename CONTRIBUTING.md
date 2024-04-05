# Contributing to KTH Style

Thanks for your interest in contributing to KTH Style!

> [!Note]
> This guide is aimed for developers. Guides for other forms of contribution will come later.

## Who can contribute

At this moment we only accept contributions from personnal in "Systemförvaltning och utveckling" (SFU) unit at IT department at KTH.

- SFU personal have the _write_ role in this repository, which means that they can create branches and pull requests. They cannot merge to `main` nor push directly there. [Read more about GitHub roles in their documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role)
- Members of "web team" are the maintainers of the repo and have _admin_ role in it.

## Quick start

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

## Writing code, branching, creating Pull Requests

> [!Note]
> These guides

- Before anything else, start by writing a message in the [KTH Slack channel #vs-it-ux](https://kth-se.slack.com/archives/C06K0G9BQUE)
- It doesn't matter if you write us because you have a question, you want to propose a new feature, you found a bug or you want to leave a comment on the repository.
- Smooth communication between KTH Style maintainers and users is encouraged.

## Development

```sh
# Starts "dev" mode with file-watching, live-reloading, etc.
npm run dev

# Build the entire project, one time
npm run build
```

> [!Tip]
> You can also run the commands from each of the directories (e.g. `@kth/style/` or `apps/style-web/`)

### Code Structure

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

### Test KTH Style locally

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
> Only admin role can do releases of `@kth/style`

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
