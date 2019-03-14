function drawBrokenLine(panel,select,lineWidth,style){
    var canvas = document.createElement('canvas'); //创建一个画布

    //获取画布所需要的属性
    var width = $(panel).outerWidth();
    var height = $(panel).outerHeight();
    var panelLeft = $(panel).offset().left;
    var panelTop = $(panel).offset().top;

    //设置画布属性
    canvas.width = width;
    canvas.height = height;
    $(canvas).appendTo($(panel).parent()).css({'position':'absolute','z-index':9999});
    $(canvas).offset({top:panelTop,left:panelLeft});

    //检测canvas可用性
    if (canvas.getContext) {
        console.log('你的浏览器支持Canvas!');
    } else {
        console.log('你的浏览器不支持Canvas!');
    }

    //获取一个2d的画布内容
    var context = canvas.getContext('2d');

    //遍历连接点
    $(select).each(function(index){
        if(index != $(select).length-1){
            var x1 = $(this).offset().left-panelLeft+$(this).outerWidth()/2;
            var y1 = $(this).offset().top-panelTop+$(this).outerHeight()/2;
            var x2 = $(select).eq(index+1).offset().left-panelLeft+$(select).eq(index+1).outerWidth()/2;
            var y2 = $(select).eq(index+1).offset().top-panelTop+$(select).eq(index+1).outerHeight()/2;
            context.moveTo (x1,y1);       //设置起点状态
            context.lineTo (x2,y2);       //设置末端状态
            context.lineWidth = lineWidth;          //设置线宽状态
            context.strokeStyle = style;  //设置线的颜色状态
            context.stroke();               //进行绘制
        }

    });
}