/**
 * Created by llan on 2016/6/6.
 */
const mongoose = require('mongoose');

// Mongoose Schema definition
const Schema = mongoose.Schema;
const PeopleSchema = new Schema({
  name: String,
  id: String
});

// Mongoose Model definition
const People = mongoose.model('peoples', PeopleSchema);

module.exports = People;
