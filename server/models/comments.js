var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  text: String,
  pageId: Number,
  commentingUser: String
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;