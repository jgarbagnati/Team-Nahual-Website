const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Configs
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/src/index.html',
   filename: 'index.html',
   inject: 'body'
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
   filename: 'index.css'
});

module.exports = {
   mode: 'production',
   entry: __dirname + '/src/index.js',
   output: {
      filename: 'index.js',
      path: __dirname + '/build'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [{
               loader: 'url-loader',
               options: {
                  outputPath: 'img',
                  limit: 8192,
               },
            }]
         },
         {
            test: /\.html$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'html-minifier-loader']
         },
         {
            test: /\.s[ac]ss$/,
            exclude: /node_modules/,
            use: [{
                  loader: MiniCssExtractPlugin.loader
               }, {
                  loader: 'css-loader',
                  options: {importLoaders: 2}
               }, 'postcss-loader', 'sass-loader']
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   plugins: [
      HTMLWebpackPluginConfig,
      MiniCssExtractPluginConfig
   ]
};
