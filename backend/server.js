var express = require('express');
var app = express();

var messages = [{text: 'text one(backend)', owner: 'Tim'}, {text: 'text two(backend)', owner: 'Pet'}];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Cotent-Type, Accept");
next();
})

app.get('/messages', function(req, res){
    res.json(messages);
})


app.listen(8080);