//1.导入express包
const express = require('express');

//2.创建Web服务器
const app = express();

//4.监听客户端请求
app.get('/user', function(req, res) {
    res.send({ name: 'xiaoming', age: 20 });
})

app.get('/', function(req, res) {
    res.send(req.query);
})

app.get('/user/:id/:username', function(req, res) {
    res.send(req.params);
})

app.post('/user', function(req, res) {
    res.send('请求成功');
})

//3.启动Web服务器
app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})