/** @type {import('nextra-theme-docs').ThemeConfig}*/

const withNextra = require("nextra")({
  theme: "nextra-theme-nhsuk",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["nhsuk-theme-nextra"],
};

module.exports = withNextra(config);
