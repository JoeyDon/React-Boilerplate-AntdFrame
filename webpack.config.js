module.exports = {
    entry: "./src/js/root.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/src/"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            include: __dirname,
            query: {
                presets: [ "es2015", "react" ]
            }
        },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]'
                // [path][name]_[local]_[hash:base64:5]也可以
            }
        ]
    }
}
