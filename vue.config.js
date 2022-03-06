module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-resume/'
        : '/',

    css: {
        loaderOptions: {
            sass: {
              additionalData: `
                        @import "@/assets/scss/_variables.scss";
                    `
            }
        }
    },

    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/'
        ],
        useRenderEvent: true,
        headless: true,
        onlyProduction: true
      }
    }
}
