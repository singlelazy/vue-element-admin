const path = require('path');

let isNeedHash = true;
if (process.env.VUE_APP_FLAG === 'testing') {
    isNeedHash = false;
}

module.exports = {
    filenameHashing: isNeedHash,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('images', resolve('src/assets/images'))
            .set('style', resolve('src/assets/style'))
            .set('ts', resolve('src/assets/ts'));

    },
    css: {
        loaderOptions: {
            stylus: {
                import: ['~style/variable.styl', '~style/function.styl', '~style/common.styl']
            }
        }
    }
};

function resolve (dir) {
    return path.resolve(__dirname, dir);
}
