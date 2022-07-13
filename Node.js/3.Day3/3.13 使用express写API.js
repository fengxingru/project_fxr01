//1.导入express
const express = require("express");
//2.创建服务器实例
const app = express();

//4.导入路由模块
const apiRouter = require("./3.14 apiRouter");
//5.把路由模块注册到app上
app.use('/api', apiRouter);


//3.启动服务器
app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})