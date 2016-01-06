var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var studentData = fs.readFileSync(__dirname + '/example.json');
// console.log(studentData);
// studentData = JSON.parse(studentData);
// var newArr = [];
// for (var i=0; i<studentData.length; i++) {
//   studentData[i].id = studentData[i].id - 1;
//   newArr.push(studentData[i]);
// }
// console.log(newArr);
// fs.writeFileSync(__dirname + '/students.json', newArr);


// DB schemas:
var kittySchema = require('./models/kitty.js');
var userSchema = require('./models/users.js');
var commentsSchema = require('./models/comments.js');

// connect to mongo in shell:
// mongo ds039185.mongolab.com:39185/jmancherje_flights -u jmancherje -p justin
mongoose.connect('mongodb://jmancherje:justin@ds039185.mongolab.com:39185/jmancherje_flights');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function() {
  console.log('connected to database successfully!');
});

// routes
require('./routes.js')(app, express);



app.use(express.static(__dirname + '/../public'));

app.listen(8000);
console.log('server running on http://127.0.0.1:8000');