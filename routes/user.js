const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post('/login',function(req,res){
  var obj =req.body;
  var $phone = obj.phone;
  var $validate = obj.validate;
  
  pool.query('SELECT * FROM fnji WHERE phone=? AND validate=?',[$phone,$validate],function(err){
    if(err) throw err;
    if(result.length>0){
      res.send("0");
    }else{
      res.send("1");
    }
  })
})