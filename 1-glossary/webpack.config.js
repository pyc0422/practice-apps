require("dotenv").config();

const path = require("path");
const outFile = path.join(__dirname, "./client/dist");
const ipFile = path.join(__dirname, "./client/src");
/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

module.exports = {
  entry: `${ipFile}/index.jsx`,
  output: {
    path: outFile,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader'
        }
      }
    ]
  }
};
