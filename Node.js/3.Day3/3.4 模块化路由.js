const express = require('express');

const app = express();

//导入路由模块
const router = require('./fodder/Router');

//使用app.use()函数注册路由模块
// app.use(router);

//为路由模块添加前缀
app.use('/api', router);

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})