// vue.config.js
// eslint-disable-next-line no-unused-vars
const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line prettier/prettier
        'vue$': "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }
};
