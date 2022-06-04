const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // additionalData: '@import "~@/assets/scss/variables.scss"; "~@/assets/scss/fonts.scss";',
        additionalData: `
        @import "@/assets/scss/fonts.scss";
        @import "@/assets/scss/mixins.scss";
        @import "@/assets/scss/variables.scss";
      `,
      },
    },
  },
});
