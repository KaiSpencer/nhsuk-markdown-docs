const withNextra = require("nextra")({
  // theme: "./theme/theme.tsx",
  theme: "nextra-theme-nhsuk",
});

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["nhsuk-theme-nextra"],
};

module.exports = withNextra(config);
