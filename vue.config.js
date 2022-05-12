const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: path.resolve(__dirname, "../docs/index.html"),
    assetsRoot: path.resolve(__dirname, "../docs"),
    assetsPublicPath: "",
  },
  transpileDependencies: true,
  publicPath: "",
});
