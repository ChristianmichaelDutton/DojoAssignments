//require mongoose
var mongoose = require('mongoose');

//require the model
var Dragon = mongoose.model('Dragon');

//export the controllers--this is an immediately invoked function
module.exports = (function(){
//return an object literal
//index returns all the objects in the database
  return {
    index: function(req, res){
      Dragon.find({},function(err, results){
        if (err){
          res.json(err)
        } else{
          res.json(results)
        }
      })
    },
    create: function(req,res){
      var new_dragon = new Dragon(req.body);
      new_dragon.save(function(err,results){
        if (err){
          res.json(err)
        } else{
          res.json(results)
        }
      })
    }
  }
})()
