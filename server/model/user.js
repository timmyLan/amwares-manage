/**
 * Created by llan on 2016/6/6.
 */
const mongoose = require('mongoose');

// Mongoose Schema definition
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String
});

// Mongoose Model definition
const User = mongoose.model('users', UserSchema);

module.exports = User;
