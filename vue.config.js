module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-resume/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                        @import "@/assets/scss/_variables.scss";
                    `
            }
        }
    }
}
