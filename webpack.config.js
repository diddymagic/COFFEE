  // var webpack = require("webpack");
const HWP = require('html-webpack-plugin');
var path = require("path");
// var DIST_DIR = path.resolve(__dirname, "dist");
// var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "vestarDirectory");
var SRC_DIR = path.resolve(__dirname, "vestarSource");

module.exports = {
  entry : SRC_DIR + "/app/index.js",
  output : {
    path : DIST_DIR + "/app",
    filename : "bundle.js"
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude : /node_modules/,
      include: SRC_DIR,
      loader : "babel-loader",
      options : {
        presets: ["@babel/preset-react","@babel/preset-env"]
      }
  },{
    test : /\.html$/,
    loader : "html-loader",
    options :{
        presets: [
          "@babel/preset-react",
          "@babel/preset-env"
          ]
      }
    },
    {
      test : /\.css$/,
      loader : ["style-loader", "css-loader"]
    }
  ]


},

plugins : [
  new HWP({
    template : SRC_DIR + "/app/index.html"
  })
]
};

// "@babel/preset-react", "@babel/preset-es2015", "@babel/preset-env"
