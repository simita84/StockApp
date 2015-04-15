  var express = require('express');
      app     = express();
  
  var path    = require("path");
  var mongoose = require("mongoose");
  var http    = require('http');
  var bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());

  //  This file will include the index.html
  app.use(express.static(path.join(__dirname, "./client")));
  //require('./config/mongoose');

 //var routes = require('./config/routes')(app);

 // app.get('/',function(request,response){
 //  response.render("index");
 // })

  var request = require('request');
 var data ={};
  var server = app.listen(8000,function() {
    console.log("---------My Server Starting--------");
  });

 app.post('/data',function(req,res){

  var code = req.body.code;
    //-----------------------  API CALL
   var  url = "https://www.quandl.com/api/v1/datasets/WIKI/"+code+".json?trim_start=2015-01-01&trim_end=2015-01-04auth_token=iYAzczB8oFWC2Z2zpkPw";

   request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response.body) // Show the HTML for the  
      //data = response.body;
      res.json(response.body);
    }
  })

    

 });


 