const path = require('path');

const pagesDir = ''
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
   name: 'commons', // 这公共代码的chunk名为'commons'
   filename: '[name].js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
   minChunks: 2, // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
});


module.exports = {
    entry: {
    	'test1': path.resolve(pagesDir, `./js/test1`), 
    	'test2': path.resolve(pagesDir, `./js/test2`), 
    },
    output: {
        path: __dirname + "/dist",
        publicPath: '../../../../build/',
        filename: "[name].js",
        // chunkFilename: '[id].bundle.js',
    }
}