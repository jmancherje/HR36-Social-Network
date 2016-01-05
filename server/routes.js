var mongoose = require('mongoose');
var userSchema = require('./models/users.js');
var commentsSchema = require('./models/comments.js');

module.exports = function (app, express) {
  app.get('/users', function (req, res) {
    mongoose.model('User').find(function (err, users) {
      res.send(users);
    });
  });

  app.post('/users', function (req, res) {
    console.log('Post request to /users');
    // send username to database IF not already there
    // set sessionStorage('id') to equal _ID in database
    var newUser = mongoose.model('User', userSchema);
    console.log('new user defined: ', newUser.name);
    res.sendStatus(200)
  });

  app.get('/comments', function (req, res) {
    mongoose.model('Comment').find(function (err, comments) {
      res.send(comments);
    });
  });

  app.post('/comments', function (req, res) {
    console.log('Post request to /comments');
    // send comment to database using session
    // store user as _ID from session storage
    res.sendStatus(200);
  });
};