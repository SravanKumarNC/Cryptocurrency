const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (App) => {
  App.use(
    '/coingecko',
    createProxyMiddleware({
      target: 'tps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      changeOrigin: true,
      pathRewrite: {
        '/coingecko': '/',
      },
    })
  );
};