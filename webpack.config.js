'use strict';
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    webpack = require("webpack"),
    htmlWebpackPlugin = require('html-webpack-plugin')
    ;
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {

    devtool: 'inline-source-map',
    entry: {
        main: './src/js/script.ts',
    },
    output: {
        path:  __dirname + '/dist/',
        publicPath: '/ToDo-list/',
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
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: __dirname
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
        new htmlWebpackPlugin({
            template: 'index.html'
        })

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "script.js",
        //     async: true,
        //     children: true
        // })
    ]

};