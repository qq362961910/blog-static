//禁止右键
document.oncontextmenu=new Function("event.returnValue=false;");
//禁止左键选择
// document.onselectstart=new Function("event.returnValue=false;");
//监听复制
document.oncopy = function(e){
// ————————————————
// 版权声明：本文为CSDN博主「大勇哥~」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/zy444263/article/details/83827697
    let selection = window.getSelection().toString();
    if(e.clipboardData){
        e.clipboardData.setData('text/plain', selection + '\r\n————————————————\r\n版权声明: 本文为AMEN的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。 \r\n原文链接: ' + window.location.href);
    }else if(window.clipboardData){
        //ie浏览器
        window.clipboardData.setData('text/plain', selection + '\r\n————————————————\r\n版权声明: 本文为AMEN的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。 \r\n原文链接: ' + window.location.href);
    }
    //阻止默认行为，否则无法重置被选中的内容。
    e.preventDefault();
};