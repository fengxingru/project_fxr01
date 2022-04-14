window.addEventListener('load', function () {
    //1.获取元素
    var focus = document.querySelector('.focus');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    //获取图片宽度
    var imageWidth = focus.offsetWidth;

    //2.当鼠标经过focus模块时，显示左右按钮；当鼠标离开时，隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        //当鼠标经过focus模块时，停止自动播放轮播图
        clearInterval(timer);
        timer = null;   //释放清空
    })
    focus.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        //当鼠标离开focus模块时，自动播放轮播图
        timer = setInterval(function () {
            right.click();
        }, 3000)
    })

    //3.动态生成圆圈
    var imagelist = focus.querySelector('.imagelist');
    var circle = focus.querySelector('.circle');

    for (var i = 0; i < imagelist.children.length; i++) {
        var li = document.createElement('li');
        circle.appendChild(li);
        //给圆圈添加自定义属性index
        li.setAttribute('index', i);
        //生成圆圈的同时绑定点击事件
        li.addEventListener('click', function () {
            //排他思想
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            /* 4.点击圆圈滚动图片
            (1)引入animate.js文件;(2)给移动的盒子添加定位;(3)盒子移动的距离为图片宽度*圆圈索引号 */
            //获取当前点击圆圈的索引号
            var index = this.getAttribute('index');
            //点击第三个圆圈，将当前圆圈的索引值赋值给num和pot，此时点击右侧按钮，图片和圆圈都能正确滚动到下一个；否则num和pot都会从0开始计数
            num = index;
            pot = index;
            animate(imagelist, -imageWidth * index);
        })
    }
    circle.children[0].className = 'current';

    //6.克隆第一张图片放在imagelist最后从，实现自动化图片无缝滚动原理
    //圆圈不会多一个的原因：克隆第一张图片的实现代码在动态生成圆圈实现代码之后
    var first = imagelist.children[0].cloneNode(true);
    imagelist.appendChild(first);

    //5.点击右侧按钮滚动一张图片
    var num = 0;
    var pot = 0;
    //10.flag为节流阀,当动画执行完成后，才能执行下一次动画
    var flag = true;
    right.addEventListener('click', function () {
        if (flag) {
            //判断通过后，立刻将flag赋值为flase；当动画执行完毕后，在回调函数中再将flag赋值为true
            flag = false;
            //图片无缝滚动原理：将imagelist中的第一个li复制一份放在最后，当点击右侧按钮滚动到最后一张时，使imagelist不做动画，left值直接为0
            if (num == imagelist.children.length - 1) {
                imagelist.style.left = 0;
                num = 0;
            }
            num++;
            //此处的回调函数，代表动画执行完毕
            animate(imagelist, -imageWidth * num, function () {
                flag = true;
            });
            //7.点击右侧按钮滚动图片的同时，小圆圈一起变化
            pot++;
            //当图片滚动到复制的最后一张时，pot还原
            if (pot == circle.children.length) {
                pot = 0;
            }
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            circle.children[pot].className = 'current';
        }
    })

    //8.点击左侧按钮滚动一张图片
    left.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //图片无缝滚动原理：将imagelist中的第一个li复制一份放在最后，当点击左侧按钮滚动到第一张时，使imagelist不做动画，left值直接为盒子图片宽度*最后一张
            if (num == 0) {
                num = imagelist.children.length - 1;
                imagelist.style.left = - imageWidth * num + 'px';
            }
            num--;
            animate(imagelist, - imageWidth * num, function () {
                flag = true;
            });
            //6.点击左侧按钮滚动图片的同时，小圆圈一起变化
            pot--;
            //当图片滚动到第一张时，再点击左侧按钮时
            if (pot < 0) {
                pot = circle.children.length - 1;
            }
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            circle.children[pot].className = 'current';
        }
    })

    //9.自动播放轮播图
    var timer = setInterval(function () {
        right.click();
    }, 3000)
})

$(function () {
    //当点击电梯导航li后，不需要执行页面滚动事件中的添加删除current类
    //节流阀/互斥锁
    var flag = true;
    //1.显示隐藏电梯导航
    var toolTop = $(".recom").offset().top;
    //解决了页面不滚动则无法显示电梯导航的bug
    toggleTool();
    $(window).scroll(function () {
        toggleTool();
        //3.页面滚动到相应内容区域时，电梯导航添加current类
        if (flag) {
            $(".floor .w").each(function (index, domEle) {
                //当页面被卷去的头部大于内容区域与顶部的距离
                if ($(document).scrollTop() >= $(domEle).offset().top) {
                    //console.log(index)可以得到内容区域对应的索引号
                    $(".fixedtool li").eq(index).addClass("current").siblings().removeClass();
                }
            })
        }
    })

    //2.点击导航页面可滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        //点击电梯导航添加current类，其兄弟li删除current类
        $(this).addClass("current").siblings("li").removeClass("current");
        //$(this).index()获取点击电梯导航li的索引号
        //选出索引号对应的内容区域,得到内容区域相对文档顶部的距离
        var toolTop = $(".floor .w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: toolTop
        }, function () {
            flag = true;
        })
    })

    //显示隐藏电梯导航函数
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
})