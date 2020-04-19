import express from 'express';
import compression from 'compression';
import path from 'path';
import dotenv from 'dotenv';
import proxy from '../src/setupProxy';

dotenv.config();

const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const app = express();

app.use(compression());
proxy(app);
app.use(express.static(build));
app.get('*', (req, res) => res.sendFile(path.join(build, 'index.html')));

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`[express]: Running on port ${process.env.PORT}`);
  }
});

export default app;
