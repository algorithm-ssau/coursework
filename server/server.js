import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

const root = path.resolve(__dirname, '..');
const app = express();

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static(path.join(root, 'build')));
app.get('*', (req, res) => res.sendFile(path.join(root, 'build', 'index.html')));

// start app
app.listen(80, (error) => {
  if (!error) {
    console.log('Port 80');
  }
});

export default app;
