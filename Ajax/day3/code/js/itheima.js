//自定义函数，将JS对象转换为JSON字符串
function resolveData(data) {
  var arr = []
  for (var k in data) {
    var str = k + '=' + data[k]
    arr.push(str)
  }

  return arr.join('&')
}

// var res = resolveData({ name: 'zs', age: 20 })
// console.log(res)

function itheima(options) {
  var xhr = new XMLHttpRequest() 

  // 把外界传递过来的参数对象，转换为JSON字符串
  var qs = resolveData(options.data)
  console.log(qs);

  if (options.method.toUpperCase() === 'GET') {
    // 发起GET请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //使用XMLHttpRequest获得的数据为JSON字符串格式，将JSON格式转换为JS对象格式
      var result = JSON.parse(xhr.responseText)
      //将获得的数据传给请求成功后的回调函数
      options.success(result)
    }
  }
}