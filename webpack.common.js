const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx',".json"]
    },
    module: {
        rules: [
          {
              test: /\.jsx?/,
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
              }
          },
          { // 2
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        })
    ],
};