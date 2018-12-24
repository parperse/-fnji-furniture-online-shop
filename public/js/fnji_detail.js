/*鼠标滑动轮播*/

function Carousel(event) {
  x = event.clientX;
  var i = $(".img360_images img");
  var z = $(".m-image-360 .img360_shelf .inner img")
  var c = $(".indicator-inner a .icon_dot");
  c = $(c);
  z = $(z);
  if (x <= 142) {
    var b = i[0];
    b = $(b);
    z.attr("src", `${b.attr("src")}`);
    c.addClass("active")
  } else if (x > 142 && x <= 284) {
    var b = i[1];
    b = $(b);
    z.attr("src", `${b.attr("src")}`);
    c.addClass("active")
  } else if (x > 284 && x <= 426) {
    var b = i[2];
    b = $(b);
    z.attr("src", `${b.attr("src")}`);
    c.addClass("active")
  } else if (x > 426 && x <= 568) {
    var b = i[3];
    b = $(b);
    z.attr("src", `${b.attr("src")}`)
  }
  else if (x > 426 && x <= 568) {
    var b = i[3];
    b = $(b);
    z.attr("src", `${b.attr("src")}`)
  } else if (x > 568 && x <= 710) {
    var b = i[4];
    b = $(b);
    z.attr("src", `${b.attr("src")}`)
  }
}

$(function () {
  var id = document.location.search.slice(4);
  $.ajax({
    url: "http://localhost:3000/detail",
    type: "get",
    data: { id },
    dataType: "json",
    success: function (res) {
      var p = res[0];
      var { subtitle, price, material, pic, title } = p;
      var pic = pic.split(",");
      var html = `
       <div class="block-images">
       <div style="background-color: rgb(248, 242, 229);">
         <div class="m-image-360" style="position: relative;">
           <div class="img360_shelf" style="width: inherit; height: inherit;">
             <div class="inner">
               <img src="${pic[0]}" style="width: inherit; height:inherit;">
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
     </div> 
     <div class="block-info">
       <div class="m-product-info d-flex flex-column justify-content-between">
         <div class="block-top">
           <div class="name">${title}</div> 
 <div class="bom">${subtitle}</div> 
 <div class="price"><span>
       ¥${price}
   </span>
 </div> <hr> 
 <div class="spec-group color">
   <div class="spec-name">颜色 colour</div> 
   <ul class="spec-list">
     <li class="">
       <div class="color-circle">
         <div class="color-inner"></div>
       </div>
           浅灰
       </li>
       <li class="">
         <div class="color-circle">
           <div class="color-inner"></div>
         </div>
           灰紫
       </li>
       <li class="active">
         <div class="color-circle">
           <div class="color-inner" style="background-color: rgb(196, 164, 30);"></div>
         </div>
           柳黄
       </li>
       <li class="">
         <div class="color-circle">
           <div class="color-inner"></div>
         </div>
           浅咖
       </li>
     </ul>
   </div>
   <div class="spec-group">
     <div class="spec-name">木色 material</div> 
     <ul class="spec-list">
       <li class="">
         
           美国白蜡木
       </li>
       <li class="">
           美国白蜡木（骏马黑）
       </li>
       <li class="active">
           美国黑胡桃木
       </li>
     </ul>
   </div> 
   <div class="spec-group">
     <div class="spec-name">选购数量 quantity</div> 
     <div class="buy-amount d-flex">
       <div>
         <div class="input-group num-input-group">
           <div class="input-group-prepend">
             <button class="btn" id="reduce">-</button>
           </div> 
           <input type="text" class="form-control" value="1" disabled> 
           <div class="input-group-append">
             <button class="btn" id="add">+</button>
           </div>
         </div>
       </div> 
       <div>件 / piece</div>
     </div>
   </div> 
   <div class="spec-group">
     <div class="spec-name">发货周期 delivery</div> 
     <div class="muted-text">家具制作周期为6-8周</div>
   </div>  
   <div class="spec-group">   </div>
 </div> 
 <div class="block-bottom">
   <div class="box-btn">
     <button class="btn btn-lg">加入购物车</button> 
     <button class="btn btn-lg">直接购买</button>
   </div> 
   <div class="muted-text">
   点击查看
   <a href="/aboutdeliver" class="link">配送详情</a>
   或
   <a href="/membership" class="link">会员制度</a>
 </div>
</div>
</div>
</div>
       `
      var div = document.querySelector("div.m-sku-info>div.d-flex");
      div.innerHTML = html;
      $(function () {
        var add = $("#add");
        var cut = $("#reduce");
        var cartNum =  add.parent(div).prev();

        add.click(function () {
          cartNum.val(parseInt(cartNum.val()) + 1);
          if (parseInt(cartNum.val()) != 1) {
            cut.attr('disabled', false);

          }
        })

        cut.click(function () {
          if (parseInt(cartNum.val()) == 1) {
            cut.attr('disabled', true);
          } else
            cartNum.val(parseInt(cartNum.val()) - 1);
        })
      })
    }
  })
},

)

/* 购物车数量加减功能 */
