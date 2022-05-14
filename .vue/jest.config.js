module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.svg$": "<rootDir>/tests/unit/_mock/svg-transform.js",
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test-utils/(.*)$": "<rootDir>/tests/unit/_helpers/$1",
  },
  testMatch: ["**/tests/unit/**/*.spec.(js|jsx|ts|tsx)"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.vue",
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/stories/**/*.ts",
    "!<rootDir>/src/shims-tsx.d.ts",
    "!<rootDir>/src/shims-vue.d.ts",
  ],
};
