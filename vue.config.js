module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}