For ease of development the nhsuk-react-component docs are in this monorepo

Once this nextra theme is more stable and has its own text and full example we can move the nhsuk-react-component docs to their own repo

The following steps will be required to migrate the docs to their own repo:

1. Change the package.json dependency for `nextra-theme-nhsuk` to the npm package instead of the workspace:\*

2. Remove transpilePackages from the next.config.js file which allows typescript to be used as workspace dependency without building the package. This should just work when a built package is used instead of the workspace.
