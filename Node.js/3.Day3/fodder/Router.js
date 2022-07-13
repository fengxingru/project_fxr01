const express = require('express');

//创建路由对象
const router = express.Router();

router.get('/user/list', function(req, res) {
    res.send('get user list');
})

router.post('/user/add', function(req, res) {
    res.send('add new user');
})

//向外共享路由对象
module.exports = router;