const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'pg-native': path.join(__dirname, 'aliases/pg-native.js'),
            'pgpass$': path.join(__dirname, 'aliases/pgpass.js'),
        }
    }
};
