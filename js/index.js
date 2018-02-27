$(function(){
    //=============时间日期：========================
    function currentTime(){
        var d=new Date(),str='';
        str+=d.getFullYear()+'.';
        str+=d.getMonth() + 1+'.';
        str+=d.getDate()+'  ';
        str+=d.getHours()+':';
        str+=d.getMinutes()+':';
        str+= d.getSeconds()+'';
        return str;
    }
    function calculTime(hourlen){
        var nowDate = new Date();
        var yeDate = new Date(nowDate.getTime()-hourlen*60*60*1000);
        return yeDate.getHours();
    }
    setInterval(function(){
        // 时钟
        $('#show').html(currentTime);
    },1000);
    //布局：
    var body=$("body").height();
    var bodyW=$("body").width();
    $(".contain2").css("height",body-60+'px');
    $(".contain2 .right").css("width",bodyW-130+'px');
    //选项卡：
    $(".contain2 .left ul").click(function(){
        var index=$(this).index(".contain2 .left ul");
        $(".contain2 .left ul").removeClass("active").eq(index).addClass("active");
        $(".contain2 .right iframe").css("display","none").eq(index).css("display","block");
    });

/*员工提交简历*/
    $(".contain_number").css("height",body-140+'px');

    $(".contain_number .left li").click(function () {
        var index=$(this).index(".contain_number .left li");
        $(".contain_number .left li").removeClass("active").eq(index).addClass("active");
        $(".contain_number .right .conn").css("display","none").eq(index).css("display",'block');
    });

});