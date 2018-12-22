const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post('/login',(req,res)=>{
  var phone = req.body.phone;
  var validate = req.body.validate;
  var sql = 'SELECT * FROM fnji_user WHERE phone=? AND validate=?';
  pool.query(sql,[phone,validate],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({ok:"0",msg:"验证码错误"});
    }else{
      res.send({ok:"1",msg:"登陆成功"});
    }
  })
})
router.get("/islogin",(req,res)=>{
  if(req.session.uid===undefined)
    res.send({ok:0});
  else
    res.send({ok:1});
})
router.post('/register',(req,res)=>{
  var phone = req.body.phone;
  var validate = req.body.validate;
  var upwd = req.body.upwd;
  var sql = 'INSERT INTO fnji_user (uid,upwd,phone,validate) VALUES()'
  pool.query(sql,)
})
module.exports = router;