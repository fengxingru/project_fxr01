const express = require('express');
const app = express();

app.get('/', function(req, res) {
    //人为制造了一个错误
    throw new Error("错误");
    res.send("Home Page");
})

//错误级别的中间件
app.use(function(err, req, res, next) {
    //在服务器答应错误相关内容
    console.log(err.message);
    //向客户端响应错误相关内容
    res.send("Error!" + err.message);
})

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})

//配置解析JSON格式数据的中间件
// app.use(express.json());
//配置解析URL-encoded格式数据的中间件
// app.use(express.urlencoded({ extended: false }))