$(function () {
    //从json获取数据
    $.getJSON("assets/info.json", function (info) {

        $("q").html(info.Quotes);


    })

    //大窗口下滚动下侧边栏跟着
    $(window).scroll(function () {
        if ($(window).scrollTop() - $("#listMenu")["0"].offsetTop> 0) {
            $("#listMenu").css({"position": "fixed", "top": "0%"});
        } else {
            $("#listMenu").css({"position": "absolute", "margin-top": "0px", "top": ""});
        }
        if (isMobile()) $("#listMenu").css({"position": "", "margin-top": "", "top": ""});
        ;
    });

    //小窗口或移动端的侧边栏点击导航自动关闭
    $("#listMenu a").click(function () {
        displayMenu();
    });


})

let menuHidden = true;
function displayMenu() {
    if (menuHidden){
        $("#listBtn p").html("&lsaquo;");
        $("#listMenu").children().css({"left":"100%"});
        menuHidden = false;
    }else {
        $("#listBtn p").html("&rsaquo;");
        $("#listMenu").children().css({"left":"32%"});
        menuHidden = true;
    }
}


function isMobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else if ($(window).width() < 768) {
        return true;
    }
    return false;
}