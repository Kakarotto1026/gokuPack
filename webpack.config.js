const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        app:'./src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Develop',
            template: 'public/index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        "presets": ["@babel/preset-react","@babel/preset-env"],
                        "plugins": ["@babel/plugin-transform-runtime"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}