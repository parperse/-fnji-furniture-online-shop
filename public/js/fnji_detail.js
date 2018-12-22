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
$(function(){
  var id = document.location.search.slice(4);
  $.ajax({
    url:"http://localhost:3000/detail",
    type:"get",
    data:{id},
    dataType:"json",
    success: function(res){
      // console.log(res.pic);
      console.log(res);
      var p = res[0];
      var {subtitle,price,material,pic}=p;
      var pic = pic.split(",");
      console.log(pic)
       var html=`
        <div style="background-color: rgb(248, 242, 229);">
        <div class="m-image-360" style="position: relative;">
          <div class="img360_shelf" style="width: inherit; height: inherit;">
            <div class="inner">
              <img src="http://static.fnji.com/temp/upload/v2/s20480_1524644461_7079.jpg?imageMogr2/thumbnail/1440x&gt;" style="width: inherit; height:inherit;">
            </div>
          </div> 
          <div class="img360_images">
            <img src="${pic[0]}" style="display: none;">
            <img src="${pic[1]}" style="display: none;">
            <img src="${pic[2]}" style="display: none;">
            <img src="${pic[3]}" style="display: none;">
            <img src="${pic[4]}" style="display: none;">
          </div> 
          <div class="img360_float" style="background:#fff; opacity:0; filter:alpha(opacity=0); position: absolute; cursor: move; left: 0px; top: 0px; z-index:2; width: 100%; height: 100%;" onmousemove="Carousel(event)">
            
          </div> 
          <div class="indicator">
            <div class="indicator-inner">
              <a href="javascript:">
                <i class="icon_dot"></i>
              </a>
              <a href="javascript:">
                <i class="icon_dot"></i>
              </a>
              <a href="javascript:">
                <i class="icon_dot"></i>
              </a>
              <a href="javascript:">
                <i class="icon_dot"></i>
              </a>
              <a href="javascript:">
                <i class="icon_dot active"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      `
  
    }
  })
})