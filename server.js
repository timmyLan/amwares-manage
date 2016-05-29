var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var index = require('./server/routes/index');
var manuFacturer = require('./server/routes/manuFacturer');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', index);
app.use('/manuFacturer', manuFacturer);

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
