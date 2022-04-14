//obj目标对象，target目标位置，callback作为形参接收函数实参（相当于callback=function(){}）
function animate(obj, target, callback){
    //防止定时器叠加
    clearInterval(obj.timer);
    //obj.timer实现了给不同元素指定不同定时器
    obj.timer = setInterval(function() {
        //实现缓步动画效果；（目标位置-当前位置）/ 10
        var step = (target - obj.offsetLeft) / 10;
        //判断向前或向后移动；若向前移动，步长为正数，则向上取整，若向后移动，步长为负数，则向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step); 
        //当目标对象与body的距离等于目标位置时，停止移动。本质为停止定时器
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //判断是否有回调函数，如果有则调用
            if(callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}