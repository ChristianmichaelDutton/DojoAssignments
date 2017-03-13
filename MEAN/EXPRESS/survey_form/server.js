// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var bodyParser = require('body-parser');
var app = express();

// use it!
app.use(bodyParser.urlencoded());//DON'T USE {extended = true}!!!
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/results', function(req, res) {
		dragon = {
			your_name: req.body.your_name,
			dojo: req.body.dojo,
			language: req.body.language,
			description: req.body.description
		};
	 	res.render("results",{dragon: dragon});
	});
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("Yeah, 8000, whatever...");
});
