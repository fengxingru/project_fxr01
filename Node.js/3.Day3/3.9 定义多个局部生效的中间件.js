const express = require('express');
const app = express();

//定义第一个局部生效的中间件函数
const mw1 = function(req, res, next) {
    console.log('第一个局部生效的中间件函数');
    //把流转关系交给下一个中间件或路由
    next();
}

//定义第二个局部生效的中间件函数
const mw2 = function(req, res, next) {
    console.log('第二个局部生效的中间件函数');
    //把流转关系交给下一个中间件或路由
    next();
}

//mw1，mw2中间件只在当前路由中生效
// app.get('/', mw1, mw2, function(req, res) {
//     res.send('Home Page');
// })

app.get('/', [mw1, mw2], function(req, res) {
    res.send('Home Page');
})

//mw1不会影响此路由
app.get('/user', function(req, res) {
    res.send('User Page');
})

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})