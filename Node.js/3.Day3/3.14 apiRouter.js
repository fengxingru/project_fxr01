const express = require("express");
const apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    //通过req.query获取客户端通过查询字符串发送到服务器端的数据
    const query = req.query;
    res.send({
        status: 0,
        message: "GET请求成功！",
        data: query
    })
})

module.exports = apiRouter;