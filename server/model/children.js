/**
 * Created by llan on 2016/6/6.
 */
var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var ChildrenSchema = new Schema({
    name: String,
    age: Number
});

// Mongoose Model definition
var Children = mongoose.model('children', ChildrenSchema);

module.exports = Children;