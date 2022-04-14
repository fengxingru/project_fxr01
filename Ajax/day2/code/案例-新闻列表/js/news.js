$(function() {
  //定义时间补零函数
  function padZero(n) {
    if (n < 10) {
      return '0' + n;
    }
    else {
      return n;
    }
  }

  //定义格式化时间的过滤器
  template.defaults.imports.dataFormat = function(temp) {
    var nowDate = new Date(temp);
    var year = nowDate.getFullYear();
    var month = padZero(nowDate.getMonth() + 1);
    var day = padZero(nowDate.getDay());
    var hours = padZero(nowDate.getHours());
    var minutes = padZero(nowDate.getMinutes());
    var seconds = padZero(nowDate.getSeconds());
    return year +'-'+ month +'-'+ day +' '+ hours +':'+ minutes +':'+ seconds;
  }

  //1.定义获取新闻列表函数
  function getNewsList() {
    $.get('http://www.liulongbin.top:3006/api/news', function(res) {
      if(res.status !== 200) {
        return alert("获取新闻列表失败！");
      }
      console.log(res);
      //遍历res.data.tags，将字符串转化为数组
      for(var i = 0; i < res.data.length; i++) {
        res.data[i].tags = res.data[i].tags.split(",");
      }
      console.log(res);
      var htmlStr = template('tpl-news', res);
      $('#news-list').html(htmlStr);
    })
  }
  getNewsList();
})