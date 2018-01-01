var request = require('request');
var ejs = require('ejs');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.set('view engine','ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/",function(req,res){
  res.render('home');
});
app.post("/weather",function(req,res){
  var d = req.body.data;
  request.get({url:"http://api.openweathermap.org/data/2.5/forecast", qs:{"q":d,
    "APPID":"d604753e308dfbb21737c987a0986651"}},function(error,response,body){
      var data = JSON.parse(body);
      if(data.message==='city not found'){
        res.status(403).send("not found");
    }else{
        res.render('new',{data:data});
    }
    });
});
app.get("/app.css",function(req,res){
  res.sendFile(path.join(__dirname , 'app.css'))
})
app.get("/logo.png",function(req,res){
  res.sendFile(path.join(__dirname , 'assets/logo.png'));
});
app.get("/main.js",function(req,res){
  res.sendFile(path.join(__dirname , 'main.js'));
});
app.get("/icon.png",function(req,res){
  res.sendFile(path.join(__dirname , 'assets/icon.png'));
});
app.listen(8080,function(){
  console.log("the web app is listening at port 8080")
});
