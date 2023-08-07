/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-06 00:01:46
 * @Description: 
 */
const path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        filename: './src/popup/popup.tsx'
    },
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [
              { from: path.resolve('src/manifest.json'), to:path.resolve('dist') },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'popup.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}