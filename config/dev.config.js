const merge         = require('webpack-merge');
const baseConfig    = require('./base.config.js');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: '3001',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        }]
    }
});
