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

    User.findOne({name: newUser.name}, function (err, user) {
      if(user){
        console.log('user already exists, not saving');
        res.send(200, user);
      } else {
        newUser.save(function(){
          console.log('saved ' + newUser.name + ' to db');
          res.send(200, newUser);
        });
      }
    });

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



  // FRIENDS:
  app.post('/friends', function (req, res) {
    console.log('Friend request recieved');
    console.log(req.body.friend);
    console.log(req.body.currentUser);

    User.findOne({name: req.body.currentUser}, function (err, user) {
      user.friends.push(req.body.friend);
      user.save(function (err) {
        if (err) {
          console.log('error updating friends list ', err);
        }
      });
    });
    res.sendStatus(200);
  });

  app.get('/friends', function (req, res) {
    User.findOne()
    res.send(200, friends);
  });


};