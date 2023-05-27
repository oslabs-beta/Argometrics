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
                        '@babel/preset-react',
                        '@babel/preset-typescript'
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
        host: 'localhost',
        port: 8888,
        // static: path.join(__dirname, 'public/'),
        // devMiddleware: {  
        //   publicPath: './dist'
        // },
        static: {
          directory: path.resolve(__dirname, 'dist'),
          publicPath: '/',
        },
        hot: true,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
          '/api/**': {
            target: 'http://localhost:6000',
            // changeOrigin: true,
          }
        }
      },
    resolve: {
      extensions: ['.*', '.ts', '.tsx', '.js', '.jsx', '.json'],
      fallback: {
        fs: false,
      },
    }

}