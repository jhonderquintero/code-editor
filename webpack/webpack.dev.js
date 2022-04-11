const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new DefinePlugin({
      "process.env.mode": JSON.stringify("DEVELOPMENT"),
    }),
    new ReactRefreshPlugin(),
  ],
};
