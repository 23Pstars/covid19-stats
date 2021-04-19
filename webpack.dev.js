const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode : 'development',
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/template.html',
            filename : 'index.html',
        })
    ]
});