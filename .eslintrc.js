module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-standard-with-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/standard"
  ]
};
