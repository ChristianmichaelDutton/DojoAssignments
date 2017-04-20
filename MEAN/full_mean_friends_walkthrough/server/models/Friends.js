//when creating this model file, the naming convention is "Capital name of model".js

//require mongoose
var mongoose = require('mongoose');
//create a variable so we're not using mongoose.Schema all the time
var Schema = mongoose.Schema;

//create a new Schema
var FriendSchema = new Schema({
  first_name: String,
  last_name: String
});

//activate the model
mongoose.model('Friend', FriendSchema);
