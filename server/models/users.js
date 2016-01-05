var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  name: String,
  password: String,
  friends: Array,
  comments: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Comment'
  }]
});

var User = mongoose.model('User', usersSchema);

module.exports = User;

