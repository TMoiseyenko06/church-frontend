const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  // Entry point for the application (your JavaScript file)
  entry: './src/index.js',

  // Output settings: where to put the bundled JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js',                // Output file name
  },

  // Modules and rules for bundling
  module: {
    rules: [
      {
        test: /\.css$/,  // Match CSS files
        use: ['style-loader', 'css-loader'],  // Use these loaders for CSS
      },
    ],
  },

  // Plugins to enhance functionality
  plugins: [
    // Automatically inject bundle.js into index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Load environment variables from .env file
    new DotenvWebpackPlugin(),
  ],
    

  // Dev server configuration (for live-reloading during development)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve files from 'dist' folder
    },
    port: 9000,  // Dev server will run on localhost:9000
    open: true,  // Open the browser automatically
  },

  // Use 'development' mode for unminified builds (use 'production' for optimized builds)
  mode: 'production',
};
