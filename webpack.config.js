const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = (env) => {

    return {

        mode: 'production',
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: __dirname + "/public/dist"
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        devServer: {
            contentBase: __dirname + '/public',
            publicPath: '/dist/'
        },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                
                {
                    test: /\.s?css$/,
                    use: [
                        // fallback to style-loader in development
                        MiniCssExtractPlugin.loader,
				        { loader: 'css-loader', options: { url: false, sourceMap: true } },
				        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    };
};