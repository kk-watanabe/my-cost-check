const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      "vue": "vue/dist/vue.esm-bundler.js",
      "@": path.resolve(__dirname, "../src"),
      "@test-utils": path.resolve(__dirname, "../tests/unit/_helpers")
    };

    config.module.rules.push({
      test: /\.js$/,
      use: [
        "babel-loader",
      ]
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader"
        },
        {
          loader: "sass-resources-loader",
          options: {
            resources: [
              path.resolve(__dirname, "../src/assets/scss/_color.scss"),
              path.resolve(__dirname, "../src/assets/scss/_size.scss"),
              path.resolve(__dirname, "../src/assets/scss/_functions.scss")
            ]
          }
        }
      ]
    });

    return config;
  }
}