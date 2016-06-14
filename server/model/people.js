/**
 * Created by llan on 2016/6/6.
 */
var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var PeopleSchema = new Schema({
    name: String,
    id: String
});

// Mongoose Model definition
var People = mongoose.model('peoples', PeopleSchema);

module.exports = People;