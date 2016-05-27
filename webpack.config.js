var path = require('path');
var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    devtool: 'eval',
    entry: {
        page1: ['./public/app/index', hotMiddlewareScript]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'public/app')
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }]
    },
};
