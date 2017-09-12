var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

//temp fake data store and read the data from the array instead of database
var messages = [{text: 'text one(backend)', owner: 'Tim'}, {text: 'text two(backend)', owner: 'Pet'}];
var users = [{firstName: 'admin', email: 'admin', password: 'admin', id: 0}];

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
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

api.get('/users/me', checkAuthenticated, function (req, res) {
    // console.log(req.user);
    res.json(users[req.user]);
})

api.post('/users/me', checkAuthenticated, function (req, res) {
    var user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
})

auth.post('/login', function(req, res) {
    var user = users.find(user => user.email == req.body.email);

    if(!user) {
        sendAuthError(res);
    }

    if(user.password == req.body.password){
        sendToken(user, res);
    }
    else
        sendAuthError(res);
})

//TODO password need to be encrypted using database before store it
auth.post('/register', function(req, res) {
    //when use database the user will have unique id so instead using index use ID
    var index = users.push(req.body) - 1;

    var user = users[index];
    user.id = index;

    sendToken(user, res);
})

function sendToken(user, res) {
    //TODO second parameter should be secret (will be provided in config for safe purpose) NOT HARDY CODED
    var token = jwt.sign(user.id, '123');

    res.json({ firstName: user.firstName, token });
}

function sendAuthError(res) {
    return res.json({ success: false, message:'email or password incorrect'});
}

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization')){
        return res.status(401).send({message: 'Unauthorized requested. Missing authentication header!'});
    }
    var token = req.header('authorization').split(' ')[1];

    // console.log(req.header('authorization'));
    // console.log(token);

    var payload = jwt.decode(token, '123');
    if (!payload){
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});
    }

    req.user = payload;

    next();
}

app.use('/api', api);
app.use('/auth', auth);


app.listen(8180);