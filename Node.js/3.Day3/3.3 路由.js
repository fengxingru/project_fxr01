const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
})

app.post('/', function(req, res) {
    res.send('post request');
})

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})