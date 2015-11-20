/**
 * Created by zj on 2015/11/20.
 */
var express=require("express");
var auth=require("./routes/auth.js");
var router=express.Router();
/**********************************/

router.get("/",function(req,res,next){
 res.redirect("/public/html/index.html");
});
/**********************************/
router.use("/",auth.userRequired);




/**********************************/

router.use("/",auth.adminRequired);




module.exports=router;