window.onload=function()
{
$(init)
function init() {
    $('.g-foot').click(function (e) {
        let perv=$('.g-foot').prev();
        let pervClone=$(perv).clone();
        let span1=pervClone.children("span").get(0);
        let num=$(span1).text();
        if(num<11){
            num++;
            $(span1).text(num);
            $(perv).after($(pervClone).clone());
        }
        else {
            alert("窗口数量不能超过11！")
        }
    })
    $('.g-index').on('click','.ui-grid-2',function (e) {
        let t=e.currentTarget;
        let next=$(t).parent().next();
        let prev=$(t).prev().prev();
        console.log(prev.text());
        if(prev.text()!="1"||(prev.text()=="1"&&next.text()!="添加")){
            while(next.text()!="添加"){
                let span1=next.children("span").get(0);
                let spanNum=$(span1).text();
                spanNum--;
                $(span1).text(spanNum);
                next=$(next).next();
            }
            $(t).parent().remove();
        }
        else {
            alert("不能删除最后一个窗口！");
        }
    })
}
}
