$(function(){
    // 纸飞机
    // 起飞
    $('.send').click(function() {
        // 步骤一：隐藏面板、显示飞机、完成折叠效果
        setTimeout(function() {
            // 隐藏信息面板
            $('#plane').removeClass('front');
            // 翻转至正面
            $('#wind_container').removeClass('beginning');
            // 折叠效果（左翼、右翼）
            $('.curvable').addClass('curved');
            // 颜色变换
            $(".body").css({"background-color": "#54575A"});
            // 步骤二：平放飞机
            setTimeout(function() {
                $('#wind_container').addClass('hover');
                $(".body").css({"background-color": "#AD8BD8"});
                //步骤三：飞机后退助跑
                setTimeout(function() {
                    $('#wind_container').addClass('fly_away_first');
                    $(".body").css({"background-color": "#6E99C4"});
                    // 步骤四：飞机向前飞翔至消失
                    setTimeout(function() {
                        $('#wind_container').addClass('fly_away');
                        $(".body").css({"background-color": "#3F9BFF"});
                        // 步骤五：飞机复位
                        setTimeout(function(){
                          $('#plane').addClass('front');
                          $('#wind_container').removeClass('fly_away fly_away_first hover').addClass('beginning');
                          $('.curvable').removeClass('curved');
                          $(".body").css({"background-color": "#000"});
                        },3000);
                    }, 600);
                }, 2000);
            }, 2800);
        }, 200);
    });
    // 关闭弹窗
    $("#plane_close").click(function(){
        $("#wind").fadeOut(200);
    });
	});