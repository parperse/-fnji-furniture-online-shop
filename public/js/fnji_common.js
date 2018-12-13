/导航栏滚动固定事件/
window.onload = function(){
  window.onscroll=function(){
    // var page = $("div.page-header");
    var page = $(".page-header");
    var top  = $("div.bar-top");//获取到导航栏id
    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离

    if(topScroll > 23){  
      //当滚动距离大于31px时执行下面的东西
      page.attr("class","page-header font-fz headroom headroom--not-bottom headroom--not-top headroom--unpinned");
      top.css("display","none");
    }else{
      //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      page.attr("class","page-header font-fz headroom headroom--not-bottom headroom--pinned headroom--top");
      top.css("display","block"); 
    }
  }
}

/*引入header*/
$(function(){
  $("<link rel='styleheet' href='../css/fnji-header.css>").appendTo('head');
  $("#page-header").load('fnji-header.html');
})
/*引入footer*/
$(function(){
  $("<link rel='styleheet' href='../css/fnji-footer.css>").appendTo('head');
  $("#page-footer").load('fnji-footer.html');
})
//引入login
$(function(){
  $("<link rel='styleheet' href='../css/fnji-login.css>").appendTo('head');
  $("#login").load('fnji-login.html');
})