//1.导入mysql模块
const mysql = require('mysql');
//2.建立与MySQL数据库之间的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的IP地址
    user: 'root', //登录数据库的地址
    password: '123', //登录数据库的密码
    database: 'test', //数据库名称
})

//3.测试mysql模块是否连接成功
db.query('select 1', function(err, results) {
    //连接失败，err为null则说明连接成功，否则为连接失败
    if (err) return console.log(err.message);
    //连接成功
    console.log(results);
})

//4.使用mysql模块操作MySQL数据库
//查询数据
const sqlStr1 = 'select * from user';
db.query('sqlStr1', function(err, results) {
    //查询失败
    if (err) return console.log(err.message);
    //查询成功，执行结果为数组
    console.log(results);
})

//插入数据
const user = { username: 'zs', password: '111' };
//待执行的sql语句里的？表示占位符
const sqlStr2 = 'insert into user (username, password) values (?, ?)';
//使用数组依次为？占位符指定具体值
db.query('sqlStr2', [user.username, user.password], function(err, results) {
    //插入失败
    if (err) return console.log(err.message);
    //插入成功
    if (results.affectedRows === 1) { console.log('插入数据成功'); }

})