const CracoAntDesignPlugin = require('craco-antd');
const weTheme = require('@njshaoshao/we-theme');
const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar');
const path = require('path');
const { addBeforeLoader, loaderByName } = require('@craco/craco');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { getSvgLoaderConfig } = require('./config/craco/loaders');
const { getOptimization } = require('./config/craco/optimization');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  webpack: {
    style: {
      modules: {
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.npm_lifecycle_event === 'report'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],
    alias: {
      '@': resolve('src'),
    },
    configure: webpackConfig => {
      webpackConfig.resolve.extensions.push('.svg');
      const svgLoader = getSvgLoaderConfig();
      addBeforeLoader(webpackConfig, loaderByName('file-loader'), svgLoader);
      const { optimization } = webpackConfig;
      webpackConfig.optimization = Object.assign(optimization, getOptimization());
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        babelPluginImportOptions: {
          libraryDirectory: 'es',
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: weTheme,
          },
        },
        modifyLessRule: lessRule => {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, 'node_modules');
          return lessRule;
        },
      },
    },
  ],
};
