/**
 * Created by yyrdl on 2015/11/20.
 */


var express=require("express");
var cookiesParser=require("cookie-parser");
//var errorHandler=require("errorhandler");

var route=require("./web_router.js");
var bodyParser=require("body-parser");
var favicon=require("serve-favicon");
var methodOverrid=require("method-override");
var compress=require("compression");
var path=require("path");
var logger = require('morgan');


var app=express();
 //TODO:
 app.set("port",);
 app.use(favicon(path.join(__dirname,"public/favicon.ico")));
 app.use(logger('dev'));
 app.use(methodOverrid());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(cookiesParser(config.cookieSecret));
 app.use(compress());
 app.use('/',route);
 app.use("/public",express.static(path.join(__dirname,"public")));

 app.listen(app.get("port"),function(err){
	 if(err)
	 {
		 console.log(err);
	 }else
	 console.log("server running at port:"+app.get("port"));
 });