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
      res.send(body);
    });
});
app.get("/logo.png",function(req,res){
  res.sendFile(path.join(__dirname , 'logo.png'));
});
app.get("/main.js",function(req,res){
  res.sendFile(path.join(__dirname , 'main.js'));
});
app.get("/icon.png",function(req,res){
  res.sendFile(path.join(__dirname , 'icon.png'));
});
app.listen(8080,function(){
  console.log("the web app is listening at port 8080")
});
