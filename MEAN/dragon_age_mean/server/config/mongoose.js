//require mongoose to connect
var mongoose = require("mongoose");
//require filesearch to search for files
var fs = require("fs");

//name the db at the end
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/dragon_age_generator");

//point the models_path to the correct location of where the models are
var models_path = __dirname + "/../models";
// console.log(models_path);

//using fs to look for javascript files in the models folder
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf(".js") > 0 ) {
		require(models_path + "/" + file);
	}
});
