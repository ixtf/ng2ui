var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',

    //HtmlWebpackPlugin( 由 webpack.common.js 引入 )
    // 插件使用了 publicPath 和 filename 设置， 来向 index.html 中插入适当的 <script> 和 <link> 标签。
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:9999/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    //我们这些 CSS 默认情况下会被埋没在 JavaScript 包中。
    // ExtractTextPlugin 会把它们提取成外部 .css 文件， 这样 HtmlWebpackPlugin 插件就会转而把一个 <link> 标签写进 index.html 了。
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});