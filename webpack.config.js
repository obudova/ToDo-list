'use strict';
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin")
    ;
module.exports = {

    devtool: 'inline-source-map',
    entry: {
        main: './src/js/script.ts',
    },
    output: {
        path: __dirname + '/dist/js',
        filename: `[name].bundle.js`
    },
    resolve: {
        // Support Typescript file extension.
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test   : /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test: /\.svg$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    // devServer: {
    //     contentBase: __dirname
    // },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new ExtractTextPlugin({
            filename: '../css/style.css'
        })
    ]

};