var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;