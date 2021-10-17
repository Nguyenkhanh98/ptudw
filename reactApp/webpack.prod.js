const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.js(\?.*)?$/i,
        })],
        splitChunks: { chunks: 'all' },
    },
});
