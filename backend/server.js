var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

//temp fake data store and read the data from the array instead of database
var messages = [{text: 'text one(backend)', owner: 'Tim'}, {text: 'text two(backend)', owner: 'Pet'}];
var users = [];

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();
var auth = express.Router();


api.get('/messages', function(req, res){
    res.json(messages);
})

api.get('/messages/:user', function(req, res){
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
})

api.post('/messages', function(req, res){
    // console.log(req.body);
    messages.push(req.body);
    //get response back (postman never gets response back its hanging for response)
    res.json(req.body);
})

//TODO password need to be encrypted using database before store it
auth.post('/register', function(req, res) {
    //when use database the user will have unique id so instead using index use ID
    var index = users.push(req.body)-1;

    var user = users[index];
    user.id = index;

    //TODO second parameter should be secret (will be provided in config for safe purpose) NOT HARDY CODED
    var token = jwt.sign(user.id, '123');

    res.json(token);
})

app.use('/api', api);
app.use('/auth', auth);


app.listen(8180);