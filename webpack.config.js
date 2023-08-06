/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-06 00:01:46
 * @Description: 
 */
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: './dist/index.js'
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}