const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (envArgs) => {
  const { env } = envArgs;
  const envConfig = require(`./webpack.${env}`);
  const config = merge(commonConfig, envConfig);
  return config;
};
