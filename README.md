# Webpack lunch and learn repo

This repo is just a quick, definitively inexhaustive view of webpack.

The idea was to have a bunch of tagged commits that will make it easier to walk through some different examples without the need to write a ton of code in front of people. Each tag will build on the last and add more functionality.

### Tags

`0` - Zero configuration basic basic

[`1`](https://github.com/jamesism/webpack/compare/0...1) - Basic configuration to add `HtmlWebpackPlugin` and `CleanWebpackPlugin`, and a `--watch` npm script

[`2`](https://github.com/jamesism/webpack/compare/1...2) - Add typescript loader support and a `tsconfig.json` file. Convert `.js` files to `.tsx` and `.ts`. Add `App` component.

[`3`](https://github.com/jamesism/webpack/compare/2...3) - Use `webpack-dev-server` and watch `webpack.config.js` for changes.

[`4`](https://github.com/jamesism/webpack/compare/3...4) - Add a second entrypoint. Demo `SplitChunksPlugin`.

[`5`](https://github.com/jamesism/webpack/compare/4...5) - Add CSS related loaders so we can make things pretty. Leave CSS inline.

[`6`](https://github.com/jamesism/webpack/compare/5...6) - Add `MiniCssExtractPlugin` in order to extract inlined CSS imports to their own CSS files for production builds. Add postcss and autoprefixer to handle vendor prefixes when necessary.

[`7`](https://github.com/jamesism/webpack/compare/6...7) - Add support for HMR! Convert from `ts-loader` to `babel-loader`, so [babel can do a better job for us](https://iamturns.com/typescript-babel/).
