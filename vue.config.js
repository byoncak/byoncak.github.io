const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js",
      template: "src/index.html",
      filename: "index.html",
    },
  },
  transpileDependencies: true,
  publicPath: "/",
});
