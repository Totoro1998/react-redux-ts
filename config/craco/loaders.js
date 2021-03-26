const path = require('path');
function resolve(dir) {
  return path.join(process.cwd(), dir);
}
const getSvgLoaderConfig = () => {
  const svgLoader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    include: [resolve('src/icons')],
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: { symbolId: 'icon-[name]' },
      },
    ],
  };
  return svgLoader;
};
module.exports = {
  getSvgLoaderConfig,
};
