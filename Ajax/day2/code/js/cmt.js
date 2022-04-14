//定义获取评论列表的函数
function getCommentList() {
  $.ajax({
    method: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    success: function (res) {
      if (res.status != 200) {
        return alert("获取评论列表失败！");
      }
      //定义一个空数组
      var rows = [];
      $.each(res.data, function(i, item) {
        var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">' + item.username + '</span>' + item.content + '</li>';
        rows.push(str);
      })
      $('#cmt-list').empty().append(rows.join(''));
    }
  })
}

getCommentList();

$(function() {
  $('#formAddCmt').on('submit', function(e) {
    //阻止表单的提交和页面的跳转
    e.preventDefault();
    //快速获取表单中的数据
    var data = $(this).serialize();
    // console.log(data);
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
      if(res.status != 201){
        return alert("发表评论失败！");
      }
      getCommentList();
      //将jQuery对象转换为DOM对象，使用reset()方法重置form表单中的数据
      $('#formAddCmt')[0].reset();
    })
  })
})