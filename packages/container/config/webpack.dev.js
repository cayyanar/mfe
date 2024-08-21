const { merge } = require ('webpack-merge');

const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

//added comment for build
const packageJson = require ('../package.json');




const devConfig = {
    mode : 'development' ,
    devServer : {
        port : 8080 , 
        historyApiFallback : {
            index : 'index.html'
        }
    },
    plugins : [

        new ModuleFederationPlugin ({
            name : 'container',
            remotes : {
                marketing : 'marketing@http://localhost:8081/remoteEntry.js'

            },

            shared : packageJson.dependecies,
        
        })

    ]
};

module.exports = merge(commonConfig,devConfig);
