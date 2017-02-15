module.exports = {
    entry: './index.ts',
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /.ts$/,
            loader: 'ts-loader',
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}