const path = require('path');
module.exports = {
    entry: {
        main: './src/js/script.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname
    },
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: `[name].bundle.js`
    },

};