const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',

    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].js',
    },

    // 是否壓縮檔案(production or development)
    mode: 'production',

    // Loaders，讓webpack能看懂JS和JSON以外的檔案
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                {
                    loader: 'postcss-loader'
                }
              ],
            },
            {
                test: /\.(png|gif|jpeg|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 2000*1024,
                    esModule: false
                }
                // type: 'asset/resource'
            },
            {
                // 處理html的img圖片，負責引入img，讓url-loader能進行處理
                test: /\.html$/,
                loader: "html-loader"
            }
        ],
    },

    // Plugin，讓webpack可以自動產生dist/index.html
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css',
        }),
    ],

    // 方便開發，看F12 source時可以看到原始碼
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
};