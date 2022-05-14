module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": "node_modules",
    "import/resolver": {
      typescript: { project: "./" },
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
