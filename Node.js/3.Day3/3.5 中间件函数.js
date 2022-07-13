const express = require('express');
const app = express();

//定义全局生效的中间件函数
app.use(function(req, res, next) {
    console.log('简化形式的中间件函数');
    next();
})

// //定义了一个中间件，mw是middleware的缩写
// const mw = function(req, res, next) {
//     console.log('中间件函数');
//     //把流转关系交给下一个中间件或路由
//     next();
// }

// //将mw注册为全局生效的中间件，只要客户端发起请求到达服务器，都会触发中间件
// app.use(mw);

app.get('/', function(req, res) {
    res.send('Home page');
})
app.get('/user', function(req, res) {
    res.send('user page');
})
app.listen(80, function() {
    console.log('http://127.0.0.1');
})