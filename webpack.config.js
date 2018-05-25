const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                }
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['@babel/preset-env']
            //       }
            //     }
            // },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            }
        ]
    }
}