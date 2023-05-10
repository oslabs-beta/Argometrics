const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: path.join(__dirname, "./client/index.tsx"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
               test: /\.(js|jsx|tsx|ts)$/,
               exclude: /node_modules/,
               use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
               } 
            },
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: ['ts-loader'],
            },
            {
              test: /\.s?css/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ],
              exclude: /node_modules/,
            },
            {
              test: /\.(png|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
              exclude: /node_modules/,
            },
        ]
      },
      plugins:[
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "index.html")
        }),
        new Dotenv()
      ],
      devServer: {
        static: path.join(__dirname, 'public/'),
        devMiddleware: {  
          publicPath: '/dist/'
        },
        port: 8080,
        proxy: {
          '/api': 'http://localhost:6000/'
        }
      },
    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
      fallback: {
        fs: false,
      },
    }

}