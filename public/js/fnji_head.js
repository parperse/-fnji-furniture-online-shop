
/*点击跳转登录*/
function login(){
  var  login = $(".modal-member-login");
  login.css("display","block")
}

/* 关闭登录页面 */
function out(){
  var  login = $(".modal-member-login");
  login.css("display","none")
}
$(function(){
  $("#login1").click(function(){
    var phone= $(".phone").val();
    var validate= $("#verify-code").val();
    if(phone!=""&&validate!=""){
      $.ajax({
        url:"http://localhost:3000/user/login",
        type:"post",
        data:{phone,validate},
        success:function(res){
          if(res.ok==1){
            alert(res.msg);
            window.location.href="http://127.0.0.1:3000/html/fnji_index.html"
          }else{
            alert(res.msg);
          }
        }
      })
    }
    
  })
})