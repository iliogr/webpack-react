const webpack               = require('webpack')
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const merge                 = require('webpack-merge')
const UglifyJsPlugin        = require('uglifyjs-webpack-plugin')
const baseConfig            = require('./base.config.js')
const path                  = require('path')
const BASE                  = path.join(__dirname, '../')

module.exports = merge(baseConfig, {
    output: {
        path: `${BASE}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ],
    },
    plugins: [
        // Extract imported CSS into own file
        new ExtractTextPlugin({
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
