
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
          alert(res.msg);
        }
      })
    }
    
  })
})