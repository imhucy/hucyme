const path = require("path");
const QiniuPlugin = require("qiniu-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: isProduction ? "https://cdn.hucy.me/hucyme/" : "/",
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~scss/common-variables.scss";`,
      },
    },
  },
  configureWebpack: {
    externals: {
      $: "jQuery",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      // assets
      .set("src", resolve("src"))
      .set("css", resolve("src/assets/css"))
      .set("scss", resolve("src/assets/scss"))
      .set("img", resolve("src/assets/img"))
      // vue
      .set("components", resolve("src/components"))
      .set("directive", resolve("src/directive"))
      .set("filters", resolve("src/filters"))
      .set("mixins", resolve("src/mixins"))
      // other dir
      .set("api", resolve("src/api")) // api目录
      .set("constant", resolve("src/constant")) // 常量目录
      .set("store", resolve("src/store")) // vuex store目录
      .set("router", resolve("src/router")) // vue-router-config 目录
      .set("views", resolve("src/views")) // pages 目录
      .set("modals", resolve("src/modals")) // 弹出框目录
      .set("plugins", resolve("src/plugins")); // vue 插件目录
    // eslint auto fix on save
    // if (process.env.NODE_ENV === 'development') {
    //   let options = config.module.rule('eslint').use('eslint-loader').get('options');
    //   options.fix = true;
    //   config.module.rule('eslint').use('eslint-loader').options(options);
    // }
    // if production mode need upload file to qiniu cdn
    if (isProduction) {
      config.plugin("qiniu-plugin").use(
        new QiniuPlugin({
          ACCESS_KEY: "pwcTaOriioGqH2ZZbCfUC1-TG2-KU8pDLTHpho2E",
          SECRET_KEY: "pDoszdTd5FyhzQ_zy8vqXAjMPZDTa9pTffMcFfYK",
          bucket: "hucyme",
          path: "hucyme/",
        })
      );
    }
  },
};
