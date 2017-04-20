var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000,
    root = __dirname;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(root+ '/client'));
app.use(express.static(root+ '/bower_components'));






app.listen(port, function{
  console.log("Let loose the dragon on port "+port);
})
