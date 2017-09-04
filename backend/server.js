var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [{text: 'text one(backend)', owner: 'Tim'}, {text: 'text two(backend)', owner: 'Pet'}];

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

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

app.use('/api', api);

app.listen(8180);