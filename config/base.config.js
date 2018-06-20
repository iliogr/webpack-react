const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin     = require('html-webpack-plugin')
const BASE = path.join(__dirname, '../')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        `${BASE}/src/index.js`
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // Creates HTML base template
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],
};
