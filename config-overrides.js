const {
  addLessLoader,
  override,
  addWebpackAlias,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackModuleRule,
} = require('customize-cra');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const weTheme = require('@njshaoshao/we-theme');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const addCustomize = () => config => {
  if (process.env.npm_lifecycle_event === 'report') {
    if (config.plugins) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  }
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; // 去掉map文件
    const splitChunksConfig = config.optimization.splitChunks;
    if (config.entry && config.entry instanceof Array) {
      config.entry = {
        main: config.entry,
        vendor: [
          'react',
          'react-dom',
          'react-router-dom',
          'react-redux',
          'redux',
          'react-router-config',
          'lodash',
          'moment',
          'react-intl',
          'react-addons-pure-render-mixin',
          'redux-promise-middleware',
          'redux-thunk',
          'react-router',
        ],
      };
    } else if (config.entry && typeof config.entry === 'object') {
      config.entry.vendor = [
        'react',
        'react-dom',
        'react-router-dom',
        'react-redux',
        'redux',
        'react-router-config',
        'lodash',
        'moment',
        'react-intl',
        'react-addons-pure-render-mixin',
        'redux-promise-middleware',
        'redux-thunk',
        'react-router',
      ];
    }

    Object.assign(splitChunksConfig, {
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
    });
  }
  return config;
};
module.exports = override(
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  // 添加lessLoader
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: weTheme,
    },
  }),
  // 配置别名
  addWebpackAlias({
    '@': resolve('src'),
  }),
  // 配置规则
  addWebpackModuleRule({
    test: /\.svg$/,
    include: [resolve('src/icons')],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: { symbolId: 'icon-[name]' },
      },
    ],
  }),
  addDecoratorsLegacy(),
  addCustomize(),
);
