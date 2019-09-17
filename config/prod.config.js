const webpack               = require('webpack');
const merge                 = require('webpack-merge');
const UglifyJsPlugin        = require('uglifyjs-webpack-plugin');
const baseConfig            = require('./base.config.js');
const path                  = require('path');
const BASE                  = path.join(__dirname, '../');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    output: {
        path: `${BASE}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.scss$/, /\.css$/],
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }]
            }
        ],
    },
    plugins: [
        // Extract imported CSS into own file
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        // Minify JS
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                compress: true
            }
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
});


// new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
