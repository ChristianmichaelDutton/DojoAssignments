//Load the express module
var express = require("express"),
    port = 8000;
//Use express to create our app
var app = express();

//Path module allows us to work with our directory paths
var path = require("path");

//This line allows our routing to find the static folder directly
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));

//Tells our server to listen on port 8000
app.listen(port, function(){
   console.log("Let loose the dragon on port " + port);
});
