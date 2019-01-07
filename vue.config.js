const path = require('path')
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        },
    }
}