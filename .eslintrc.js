module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  ignorePatterns: ['js'],
  env: {
    node: true,
    browser: true,
    es6: true,
    es2017: true
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
};
