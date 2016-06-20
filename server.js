var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var compiler = webpack(config);

var index = require('./server/routes/index');
var user = require('./server/routes/user');
var children = require('./server/routes/children');

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
mongoose.connect('localhost','report', function (error) {
    if (error) {
        console.log(error);
    }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.use('/', index);
    app.use('/user', user);
    app.use('/children', children);
});

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});
