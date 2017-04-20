//require mongoose
var mongoose = require('mongoose');

//require the model
var Friend = mongoose.model('Friend');

//export the controllers--this is an immediately invoked function
module.exports = (function(){
//return an object literal
//index returns all the objects in the database
  return {
    index: function(req, res){
      Friend.find({},function(err, results){
        if (err){
          res.json(err)
        } else{
          res.json(results)
        }
      })
    },
    create: function(req,res){
      var new_friend = new Friend(req.body);
      new_friend.save(function(err,results){
        if (err){
          res.json(err)
        } else{
          res.json(results)
        }
      })
    }
  }
})()
