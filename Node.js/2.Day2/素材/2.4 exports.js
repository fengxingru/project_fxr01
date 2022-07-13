exports.username = 'zz';
exports.sayHello = function() {
    console.log('大家好！我是' + username);
}

//以module.exports指向的对象为准
module.exports = {
    age: 24,
    gender: '女'
}