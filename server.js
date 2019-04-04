var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var path = require('path');
app.use(express.static(__dirname));
app.listen(port);

console.log('Aplicacion desde Node: ' + port);

app.get("/",function(req,res){
  res.sendFile('index.html',{root:'.'});
})
