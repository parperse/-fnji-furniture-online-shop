const express=require("express");
const router=express.Router();
const pool=require("../pool");

//测试: http://localhost:3000/index
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM fnji_index_product`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})

module.exports=router;