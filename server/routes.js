var mongoose = require('mongoose');
var User = require('./models/users.js');
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
    var newUser = new User({name: req.body.name})
    var userId = newUser._id;
    console.log(userId);

    User.find({name: newUser.name}, function (err, users) {
      if(users.length > 0){
        userId = users[0]._id;
        console.log('user already exists, not saving');
      } else{
        newUser.save(function(){
          console.log('saved ' + newUser.name + ' to db');
        });
      }
    });

    res.send(200, userId);
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

  app.post('/friends', function (req, res) {
    console.log('Friend request recieved');

    res.sendStatus(200);
  });
};