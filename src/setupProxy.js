const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/dev-api', {
      target: 'https://dev-gamepub.modooplay.com/', //接口服务器地址
      changeOrigin: true,
      url: process.env.REACT_APP_BASE_API,
      secure: false,
      ws: false, // need close
      pathRewrite: {
        [`^${process.env.REACT_APP_BASE_API}`]: '',
      },
    }),
  );
};
