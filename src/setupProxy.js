const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const express = require('express');

dotenv.config();

const root = path.resolve(__dirname, '..');
const storage = path.join(root, 'server', 'storage');

const api = {
  target: `${process.env.API}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
};

module.exports = (app) => {
  app.use('/storage', express.static(storage));
  app.use(createProxyMiddleware('/api', api));
};
