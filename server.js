var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var mongoose = require('mongoose');
var app = express();
var compiler = webpack(config);

var index = require('./server/routes/index');
var user = require('./server/routes/user');

/*webpack*/
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

/*views*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*mongoose*/
mongoose.connect('localhost','report', function (error) {
    if (error) {
        console.log(error);
    }
});

app.use('/', index);
app.use('/user', user);

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
