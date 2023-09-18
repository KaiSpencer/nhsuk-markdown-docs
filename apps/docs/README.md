# NHSUK React Component Docs

# Notes

## Sidebar

The sidebar will show for any folder child of /pages ie /pages/components will show a sidebar with a components subheading and each sidebar item will be a the children of /pages/components.

The current implementation will not nest beyond this level, ie /pages/components/header/im-a-header.mdx will not show in the sidebar. For now the supported format is /pages/components/header.mdx

To support this nesting, we need to implement some kind of expand and collapse functionality in the sidebar.

# Contributing

## Prerequisites

Install bun

```bash
npm install -g bun
```

## Tests

### Running the tests

To run the tests, run the following command:

```bash
bun test
```
