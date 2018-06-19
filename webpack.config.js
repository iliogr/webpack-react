const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const path = require('path')
const BASE = path.join(__dirname, "src")

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: [
        'react-hot-loader/patch',
        `${BASE}/index.js`
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: `${BASE}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}
