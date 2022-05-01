window.onload=function()
{
$(init)
function init() {
    $('.g-cnt').click(function (e) {
        let t=e.currentTarget;
        let tmp=$(t).clone();
        $(tmp).css("width","190px");
        $(tmp).css("height","110px");
        $(tmp).css("padding-top","70px");
        $('.bigImage').empty();
        $('.bigImage').css("display","flex");
        $('.bigImage').append($(tmp).clone());
        e.stopPropagation();
    })
    $('body').click(function () {
        $('.bigImage').empty();
        $('.bigImage').css("display","none");
    })

}
}
