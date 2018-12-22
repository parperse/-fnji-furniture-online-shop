const express=require("express");
const router=express.Router();
const pool=require("../pool");

// 测试127.0.0.1:3000/fnji_detail?lid=?
router.get("/",(req,res)=>{
  var id = req.query.id;
  var sql = `SELECT * FROM fnji_detail WHERE id=?`;
  pool.query(sql,[id],(err,result)=>{
    if(err) throw(err);
    res.send(result);
    console.log(id);
  })
})
module.exports = router;