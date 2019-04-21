const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
  const { mode } = argv;
  const isDev = mode === "development";

  return {
    entry: {
      index: "./src/index.tsx",
      another: "./src/another.tsx"
    },
    devServer: {
      stats: "errors-only",
      hotOnly: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.scss?$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev
              }
            },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer({ grid: true })]
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader",
            options: isDev
              ? {}
              : {
                  limit: 5000
                }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]"
            }
          }
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
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    }
  };
};
