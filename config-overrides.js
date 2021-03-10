const { addLessLoader, override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = override(
  //添加lessLoader
  addLessLoader(),
  //配置别名
  addWebpackAlias({
    '@': resolve('src'),
  }),
  //配置规则
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
);
