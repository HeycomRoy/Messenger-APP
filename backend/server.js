var express = require('express');
var app = express();

var messages = [{text: 'text one', owner: 'Tim'}, {text: 'text two', owner: 'Pet'}];

app.get('/messages', function(req, res){
    res.json(messages);
})

app.listen(8080);