const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const compiler = webpack(config);

const index = require('./server/routes/index');
const children = require('./server/routes/children');
/*webpack*/
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

/*public*/
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/*views*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*mongodb connect*/
mongoose.Promise = require('bluebird');
mongoose.Promise = require('q').Promise;
mongoose.Promise = global.Promise;
mongoose.connect('localhost', 'children', function(error) {
  if (error) {
    console.log(error);
  }
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.use('/', index);
  app.use('/children', children);
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
