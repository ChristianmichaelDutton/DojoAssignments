//when creating this model file, the naming convention is "Capital name of model".js

//require mongoose
var mongoose = require('mongoose');
//create a variable so we're not using mongoose.Schema all the time
var Schema = mongoose.Schema;

//create a new Schema
var FriendSchema = new Schema({
  first_name: {type: String, required:"You must enter a first name"},
  last_name: {type: String, required:"You must enter a last name"},
  birthday: {type: Date,required:"You must enter your birthday"}
});

//activate the model
mongoose.model('Friend', FriendSchema);
