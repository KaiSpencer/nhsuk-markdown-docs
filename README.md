# Nhsuk Markdown Docs

This package is a custom theme for [Nextra](https://nextra.vercel.app/) that allows you to easily create documentation sites using markdown.

Nextra is a lightweight wrapper around [Next.js](https://nextjs.org/) and [MDX](https://mdxjs.com/), that uses Static Site Generation to create a fast and easy to use documentation site.

Paired together, this package and Nextra allow you to create a documentation site with a sidebar, navigation, and more, with minimal effort and no configuration.

# Project Status

> This project is currently in active development and is _not_ ready for use.

# Contributing

## Prerequisites

Bun is used as a package manager and bundler for the project. Install it globally with:

```bash
npm install -g bun
```

## Dependencies

Install dependencies from the project root with:

```bash
bun install
```

## Repo layout

This repo is a monorepo managed with [Turborepo](https://turbo.build/repo), comprising of apps and packages.

### Apps

Web applications live in the `/apps` directory

#### docs

The documentation site lives in `/apps/docs`

This is a living example of `nhsuk-markdown-docs` in action.

#### nhsuk-react-component-docs

Experimental docs for [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) live in `/apps/nhsuk-react-component-docs`

These will be moved to their own repo in the future when the first stable release of `nhsuk-markdown-docs` is ready.

### Packages

Packages live in the `/packages` directory

#### nextra-theme-nhsuk

This is the main package that contains the NHSUK theme for Nextra.

#### eslint-config-custom

This is a custom eslint config that is used across all packages and apps.

#### tsconfig

This is a custom tsconfig that is used across all packages and apps.
