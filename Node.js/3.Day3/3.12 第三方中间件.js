const express = require('express');
const app = express();

//导入第三方中间件
const parser = require("body-parser");
//注册并使用第三方中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/', function(req, res) {
    //在服务器可以使用req.body属性接收客户端发送的请求体数据
    //默认情况下，未配置解析表单数据的中间件，则req.body默认等于undifined
    console.log(req.body);
    res.send("OK");
})

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})