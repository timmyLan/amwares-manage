/**
 * Created by llan on 2016/6/6.
 */
var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

module.exports = User;