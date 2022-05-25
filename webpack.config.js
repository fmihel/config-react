const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ServerConfig = require('./server/config');
//const { PageReloadPlugin } = require('page-reload-webpack-plugin');

const isDevelopment = false;
const SOURCE_PATH = './app/';
const PUBLIC_PATH = ServerConfig.public;
const TEMPLATE_PATH = './app/template/';
const MEDIA_PATH = './app/media/';

module.exports = {
    entry:{ 
        index:`${SOURCE_PATH}index.js`,
    },
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: '[name].[contenthash].js',
        //chunkFilename: '[name].bundle.js',
        
        //filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.[contenthash].js',
        //publicPath: PUBLIC_PATH,
        path: path.resolve(__dirname, PUBLIC_PATH),
        //path: path.resolve(__dirname, 'dist'),        
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'app/source/components/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                    },{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },{
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },{
                        loader: 'sass-loader' // compiles SASS to CSS
                    }
                ]
            },            
        ],
    },
    mode: (isDevelopment  ? 'development' : 'production'),
    devtool: (isDevelopment  ? 'inline-source-map' : ''),
    devServer: {
        contentBase: PUBLIC_PATH,
        port: ServerConfig.port,
        liveReload: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: `${TEMPLATE_PATH}index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: `${MEDIA_PATH}favicon.ico` },
        ]),
        //new PageReloadPlugin({port:ServerConfig.port,enable:true}),
    ],
};
