const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index:['babel-polyfill', path(__dirname, '..', 'src', 'index.js')]
    },
    output: {
        filename: '[index].[contenthash:6].js',
        path: path(__dirname, '..', 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            } 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path(__dirname, '..', 'public', 'index.html')
        })
    ]
}