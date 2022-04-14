$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui();

  //发送消息
  $('#btnSend').on('click', function() {
    var text = $('#ipt').val().trim();  //获取输入框中的内容
    if(text.length <= 0) {  //输入框中为空或空格，清空输入框并提示
      $('#ipt').val('');
      return alert('说点什么吧~');
    }
    //获取输入框中的内容追加页面中
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /><span>' + text + '</span></li>');
    $('#ipt').val('');  //内容发送成功后，清空输入框中的内容
    resetui();  //重置滚动条的位置
    getMsg(text); //调用获取聊天机器人回复消息的函数
  })

  //定义获取聊天机器人回复消息的函数
  function getMsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken: text
      },
      success: function(res) {
        // console.log(res);
        if (res.message === 'success') {
          var msg = res.data.info.text; //接收聊天机器人回复的消息
          // console.log(msg);
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /><span>' + msg + '</span></li>');
          resetui();  //重置滚动条的位置
          getVoice(msg);  //获取聊天机器人回复消息成功后调用该函数
        }
      }
    })
  }

  //定义将聊天机器人回复消息转化为语音的函数
  function getVoice(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text: text
      },
      success: function(res) {
        // console.log(res);
        if (res.status === 200) {
          //修改audio的src属性
          $('#voice').attr('src', res.voiceUrl);
        }
      }
    })
  }

  //回车发送消息
  $('#ipt').on('keyup', function(e) { //给输入框绑定按键谈起事件
    if(e.keyCode === 13) {  //13为enter的SCII码值
      $('#btnSend').click();
    }
  })
})