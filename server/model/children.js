/**
 * Created by llan on 2016/6/6.
 */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
// Mongoose Schema definition
const Schema = mongoose.Schema;
const ChildrenSchema = new Schema({
  name: String,
  age: Number
});
ChildrenSchema.plugin(mongoosePaginate);
// Mongoose Model definition
const Children = mongoose.model('children', ChildrenSchema);

module.exports = Children;
