const express = require('express');
const app = express();

//除错误级别的中间件，其他中间件必须在路由之前进行配置
//通过express.json()中间件解析表单中的json格式数据
app.use(express.json());

//配置express.urlencoded中间件，解析表单中的urlencoded格式数据
app.use(express.urlencoded({ extended: false }))

app.post('/', function(req, res) {
    //在服务器可以使用req.body属性接收客户端发送的请求体数据
    //默认情况下，未配置解析表单数据的中间件，则req.body默认等于undifined
    console.log(req.body);
    res.send("OK");
})

app.post('/user', function(req, res) {
    //默认情况下，未配置解析表单中的urlencoded格式数据的中间件，则req.body默认等于{}
    console.log(req.body);
    res.send("ok");
})

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})