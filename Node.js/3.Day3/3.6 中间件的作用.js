const express = require('express');
const app = express();

//定义全局变量的简化形式
app.use(function(req, res, next) {
    next();
})

app.get('/', function(req, res) {
    res.send('Home page');
})
app.get('/user', function(req, res) {
    res.send('user page');
})
app.listen(80, function() {
    console.log('http://127.0.0.1');
})