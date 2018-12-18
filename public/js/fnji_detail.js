/*鼠标滑动轮播*/
function Carousel(event){
  x=event.clientX;
  var i=$(".img360_images img");
  var z=$(".m-image-360 .img360_shelf .inner img")
  var c=$(".indicator-inner a .icon_dot");
  c=$(c);
  z=$(z);
  if(x<=142){
    var b= i[0];
    b=$(b);
    z.attr("src",`${b.attr("src")}`);
    c.addClass("active")
  }else if(x>142&&x<=284){
    var b= i[1];
    b=$(b);
    z.attr("src",`${b.attr("src")}`);
    c.addClass("active")
  }else if(x>284&&x<=426){
    var b= i[2];
    b=$(b);
    z.attr("src",`${b.attr("src")}`);
    c.addClass("active")
  }else if(x>426&&x<=568){
    var b= i[3];
    b=$(b);
    z.attr("src",`${b.attr("src")}`)
  }
  else if(x>426&&x<=568){
    var b= i[3];
    b=$(b);
    z.attr("src",`${b.attr("src")}`)
  }else if(x>568&&x<=710){
    var b= i[4];
    b=$(b);
    z.attr("src",`${b.attr("src")}`)
  }  
} 
/* 购物车数量加减功能 */
$(function(){
  var add = $(".input-group-append").children();
  var cut = $(".input-group-prepend").children();
  var cartNum = $(".input-group-prepend").next();
  
  add.click(function(){
    cartNum.val(parseInt(cartNum.val())+1);
    if(parseInt(cartNum.val())!=1){
      cut.attr('disabled',false);
    }
  })
  
  cut.click(function(){
    if(parseInt(cartNum.val())==1){
      cut.attr('disabled',true);
    }else
    cartNum.val(parseInt(cartNum.val())-1);
  })
})