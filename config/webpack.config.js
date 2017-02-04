var webpack = require('webpack')
var path = require('path')
var webpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    devtool: 'eval',
    entry: ['index.tsx'],
    output: {
        filename: 'app.js',
        path: path.resolve('dist')
    },
    resolve: {
        extensions: ['','.ts','.tsx','.js','.jsx'],
        modulesDirectories : ['src','node_modules']
    },
    module: {
        loaders: [{test: /\.tsx?$/, loaders:['babel','ts-loader']},
        {test: /\.scss?$/, loaders:['style','css','sass']}
        ]
    },
    plugins: [
        new webpackNotifierPlugin({alwaysNotify: true})
    ]
}