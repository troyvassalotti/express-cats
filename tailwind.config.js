module.exports = {
    content: [
        './views/**/*.pug'
    ],
    theme: {
        screens: {
            'md': '768px',
            'lg': '1280px',
        },
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'screen': '100vh'
        }
    },
    corePlugins: {
        float: false,
        accessibility: false,
        backdropBrightness: false,
        backdropContrast: false,
        backdropGrayscale: false,
        backdropHueRotate: false,
        borderCollapse: false,
        boxDecorationBreak: false,
        clear: false
    }
}
