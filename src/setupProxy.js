const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const api = {
  target: `${process.env.API}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
};

module.exports = (app) => {
  app.use(createProxyMiddleware('/api', api));
};
