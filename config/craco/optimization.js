const TerserPlugin = require('terser-webpack-plugin');

const getOptimization = () => {
  const optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          priority: -10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000,
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          //生产环境删除注释
          format: {
            comments: false,
          },
          parse: {
            ecma: 8,
          },
          compress: {
            drop_console: true,
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        //生产环境删除注释
        extractComments: false,
      }),
    ],
  };
  return optimization;
};

module.exports = {
  getOptimization,
};
