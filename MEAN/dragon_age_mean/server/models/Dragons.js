//when creating this model file, the naming convention is "Capital name of model".js

//require mongoose
var mongoose = require('mongoose');
//create a variable so we're not using mongoose.Schema all the time
var Character = mongoose.Schema;

//create a new Schema
var DragonSchema = new Character({
  name: String,
  race: String,
  class: String,
  communication: Number,
  constitution: Number,
  cunning: Number,
  dexterity: Number,
  magic: Number,
  perception: Number,
  strength: Number,
  willpower: Number,
});

//activate the model
mongoose.model('Dragon', DragonSchema);
