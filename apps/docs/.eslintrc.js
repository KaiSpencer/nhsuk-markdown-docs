module.exports = {
  extends: ["custom/next"],
  overrides: [
    {
      files: ["*.cy.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
      }, // @testing-library/cypress brings in unsafe any calls, not looked into it too much but this stops the errors in test files only
    },
  ],
};
