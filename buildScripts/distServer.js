import express from 'express';
import path from 'path'
import open from 'open'
import compression from 'compression';

let port = 3000;
let app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }))
app.use(compression())// to enable gz compoession in express
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    },
    {
      id: 1,
      firstName: 'cool',
      lastName: 'hot',
      email: 'cool@hot.com'
    }
  ])
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)// eslint-disable-line no-console
  }
  else {
    open('http;//localhost:' + port)
  }
});
