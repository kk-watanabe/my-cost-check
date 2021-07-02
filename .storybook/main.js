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
      ]
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, "./tsconfig.json")
          }
        }
      ]
    });

    return config;
  }
}