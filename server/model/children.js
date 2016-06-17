/**
 * Created by llan on 2016/6/6.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
// Mongoose Schema definition
var Schema = mongoose.Schema;
var ChildrenSchema = new Schema({
    name: String,
    age: Number
});
ChildrenSchema.plugin(mongoosePaginate);
// Mongoose Model definition
var Children = mongoose.model('children', ChildrenSchema);

module.exports = Children;