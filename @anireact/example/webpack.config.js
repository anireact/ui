const { resolve } = require('upath');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    target: 'web',
    context: __dirname,
    externals: {},
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    output: {
        publicPath: '/ui/',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/iu,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.[jt]sx?$/iu,
                exclude: /node_modules/u,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svgz?|ttf|otf|eot|woff2?)$/iu,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[sha512:hash:base58:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CompressionWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, '..'),
        compress: true,
        host: '0.0.0.0',
        port: 1337,
        historyApiFallback: true,
    },
};
