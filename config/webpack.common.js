var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            // 所有 import 'ng2-translate' 换成 'ng2-translate/ng2-translate'
            // 为了解决 ng2-translate 本身导入错误
            {
                test: /\.js$/,
                include: /ng2-translate/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
            // {
            //     test: /\.js$/,
            //     include: /ng2-translate/,
            //     loader: 'awesome-typescript-loader'
            // },
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "Hammer": "hammerjs/hammer"
        }),
        // 这里标记出了三个 块 之间的等级体系： app -> vendor -> polyfills 。
        // 当 Webpack 发现 app 与 vendor 有共享依赖时，就把它们从 app 中移除。
        // 在 vendor 和 polyfills 之间有共享依赖时也同样如此 ( 虽然它们没啥可共享的 ) 。
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};