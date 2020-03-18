import express from 'express';
import compression from 'compression';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const root = path.resolve(__dirname, '..');
const app = express();
const api = {
  target: `${process.env.API}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
};

app.use(compression());
app.use(createProxyMiddleware('/api', api));
app.use(express.static(path.join(root, 'build')));
app.get('*', (req, res) => res.sendFile(path.join(root, 'build', 'index.html')));

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`[express]: Running on port ${process.env.PORT}`);
  }
});

export default app;
