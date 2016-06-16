/**
 * Created by llan on 2016/6/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.connect('localhost','report', function (error) {
    if (error) {
        console.log(error);
    }
});