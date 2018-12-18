
/*点击跳转登录*/
function login(){
  var  login = $(".modal-member-login");
  var  backdrop = $(".modal-backdrop");
  login.css("display","block");
  backdrop.css("display","");
}

/* 关闭登录页面 */
function out(){
  var  login = $(".modal-member-login");
  var  backdrop = $(".modal-backdrop");
  login.css("display","none");
  backdrop.css("display","none");
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

/* 用户注册页面 */
function register(){
  var  register = $(".modal-member-register");
  register.css("display","block");
  var  backdrop = $(".modal-backdrop");
  backdrop.css("display","");
}

/* 退出注册页面 */
function over(){
  var  register = $(".modal-member-register");
  register.css("display","none");
  var  backdrop = $(".modal-backdrop");
  backdrop.css("display","none");
}
$(function(){
  $()
})