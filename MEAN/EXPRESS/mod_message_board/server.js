var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set("view engine", "ejs");

require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(port, function(){
	console.log("Let loose the dragon on ",port);
});
