$(function(){
    $.ajax({
      url:"http://localhost:3000/index",
      type:"get",
      //data:undefined
      dataType:"json",//告诉ajax，将json字符串自动转为对象
      success: function(res){
        var p =res[0];
        var {pid,title,pic,price,href}=p;
        var html=`
            <td rowspan="2" colspan="2">
                <a href="${href}" data-pos="all.chair.4889" class="cell" style="background-color: rgb(248, 242, 229); transform: translateY(0px);">
                <div class="cell-image" style="background-image: url(${pic});" lazy="loaded"></div> 
                    <div class="cell-overlay">
                        <div class="title">${title}</div>   
                        <div class="price">¥${price.toFixed(2)}</div>
                    </div>   
                </a>
            </td>`
        var tr =document.querySelector(
                "div.m-category>div>table.m-list-table>tbody>tr:nth-child(1)>td:nth-child(1)"
        );
        tr.innerHTML=html;

        var p =res[1];
        var {pid,title,pic,price,href}=p;
        var html=`
            <td rowspan="1" colspan="1">
                <a href="${href}" data-pos="all.chair.4847" class="cell" style="background-color: rgb(232, 236, 231); transform: translateY(0px);">
                    <div class="cell-image" data-src="http://static.fnji.com/temp/upload/v2/s20480_1524649908_1947.png?imageMogr2/thumbnail/500x>/format/jpg/background/I2U4ZWNlNw==" style="background-image: url(${pic});" lazy="loaded"></div> 
                    <div class="cell-overlay">
                        <div class="title">${title}</div>   
                        <div class="price">¥${price.toFixed(2)}</div>
                    </div>   
                </a>
            </td>`
        var tr =document.querySelector(
            "div.m-category>div>table.m-list-table>tbody>tr:nth-child(1)>td:nth-child(2)"
            
        );
        tr.innerHTML=html;

        var p =res[2];
        var {pid,title,pic,price,href}=p;
        var html=`
            <td rowspan="1" colspan="1">
                <a href="${href}" data-pos="all.chair.6373" class="cell" style="background-color: rgb(232, 236, 231); transform: translateY(0px);">
                    <div class="cell-image" data-src="http://static.fnji.com/temp/upload/v2/s20480_1534393610_9431.png?imageMogr2/thumbnail/500x>/format/jpg/background/I2U4ZWNlNw==" style="background-image: url(${pic});" lazy="loaded"></div> 
                    <div class="cell-overlay">
                        <div class="title">${title}</div>   
                        <div class="price">¥${price.toFixed(2)}</div>
                    </div>  
                    <div class="cell-status status-fnji-new">
                        <i class="u-icon u-icon-fnji-new"></i>
                    </div> 
                </a>
            </td> `
            var td =document.querySelector(
                "div.m-category>div>table.m-list-table>tbody>tr:nth-child(1)>td:nth-child(3)"
            );
            console.log(td)
            td.innerHTML=html;
      }
    })
})
// 轮播图组件
$(function(){
    
})