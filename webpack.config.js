const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
    another: "./src/another.tsx"
  },
  devServer: {
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    filename: "[name].[hash].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.join(__dirname, "src/index.html") })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
