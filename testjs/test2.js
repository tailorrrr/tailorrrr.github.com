window.onload=function()
{
$(init)
function init() {
    $('.hd-1').click(function () {
        $('.m-hd>div').css("background","#ffffff");
        $('.m-hd>div:nth-child(1)').css("background","#cccccc");
        $('.bd-1').css("display","flex");
        $('.bd-2').css("display","none");
        $('.bd-3').css("display","none");

    })
    $('.hd-2').click(function () {
        $('.m-hd>div').css("background","#ffffff");
        $('.m-hd>div:nth-child(2)').css("background","#cccccc");
        $('.bd-2').css("display","flex");
        $('.bd-1').css("display","none");
        $('.bd-3').css("display","none");
    })
    $('.hd-3').click(function () {
        $('.m-hd>div').css("background","#ffffff");
        $('.m-hd>div:nth-child(3)').css("background","#cccccc");
        $('.bd-3').css("display","flex");
        $('.bd-2').css("display","none");
        $('.bd-1').css("display","none");
    })
}
}
