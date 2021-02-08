$(function () {
    $.getJSON("assets/info.json",function (info) {

        $("q").html(info.Quotes);



    })
})