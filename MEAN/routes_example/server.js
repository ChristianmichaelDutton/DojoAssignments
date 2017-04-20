var express = require('express'),
app = express(),
path = require('path'),
port = 8000;

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'./bower_components')));

app.listen(port,function(){
  console.log("Let loose the dragon on port " + port)
})
