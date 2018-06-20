const webpack   = require('webpack')
const path      = require('path')
const BASE      = path.join(__dirname, '../')

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
        }]
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],
};
