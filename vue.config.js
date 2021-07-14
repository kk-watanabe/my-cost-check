module.exports = {
  transpileDependencies: ["@vue/reactivity"],
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            "./src/assets/scss/_color.scss",
            "./src/assets/scss/_size.scss",
            "./src/assets/scss/_functions.scss",
          ],
        })
        .end();
    });

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
