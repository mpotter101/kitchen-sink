const path = require('path');
const fs = require('fs');

module.exports = {
    // The main file to watch and start compiling the build from
    entry: './project/Boot.js',
    output: {
        // Where to export the file
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: 'style!css' },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', 'raw-loader', 'sass-loader']
            // },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'project'),
                    // Resolve threejs
                    // path.resolve(__dirname, 'node_modules/three'),
                    // fs.realpathSync('./node_modules/three'),
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env'].map(require.resolve)
                }
            }
        ]
    },
    resolve: {
        // Expose node modules to browser. Access via: import foo from 'bar'
        alias: {
            // lance: path.resolve(__dirname, 'node_modules/lance-gg/src/'),
            // three: path.resolve(__dirname, 'node_modules/three/src/'),
        }
    }
};
