/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-06 00:01:46
 * @Description: 
 */
const path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: {
        popup: path.resolve('./src/popup/popup.tsx')
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [tailwindcss, autoprefixer]
                        }
                    }
                }],
                test: /\.css$/i
            }
        ]
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                { from: path.resolve('src/static'), to:path.resolve('dist') },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    }
}