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

// var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({name: 'Silence'});
// console.log(silence.name);
// var Fluffy = new Kitten({name:'Fluffy'});
// Fluffy.speak();
// Fluffy.save(function (err, Fluffy) {
//   if (err) console.error(err);
//   Fluffy.speak();
// });

// silence.save(function (err, silence) {
//   if (err) console.error(err);
//   console.log(silence.name);
// });