const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set fallbacks for Node.js core modules
      webpackConfig.resolve.fallback = {
        fs: false,
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        path: require.resolve("path-browserify"),
        url: require.resolve("url/"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        querystring: require.resolve("querystring-es3"),
        net: false,
        dns: false,
      };

      // Set aliases
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        buffer: require.resolve("buffer/"),
      };

      // Add plugins
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ];

      return webpackConfig;
    },
  },
};
