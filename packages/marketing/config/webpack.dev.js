const { merge } = require ('webpack-merge');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
//const commonConfig = require('webpack');

const packageJson = require ('../package.json');



const devConfig = {
    mode : 'development' ,
    devServer : {
        port : 8081 , 
        historyApiFallback : {
            index : 'index.html'
        }
    },
    plugins : [
        new ModuleFederationPlugin ({
name : 'marketing',
filename : 'remoteEntry.js',
exposes : {
    './MarketingApp' : './src/bootstrap' ,
},
      shared : packageJson.dependecies,
        }),
        new HtmlWebpackPlugin ({
            template : './public/index.html',
            minify: false
        })
    ]
};

module.exports = merge(commonConfig,devConfig);
