var mongoose = require('mongoose');
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

module.exports = {
  messagefind:function(req,res){
    Message.find({}, false, true).populate('_comments').exec(function(err, messages){
  	      res.render('index.ejs', {messages: messages});
        })
  },
  messagecreate:function(req,res){
    var newMessage = new Message({name: req.body.name, message: req.body.message});
    newMessage.save(function(err){
      if(err){
        console.log(err);
        res.render('index.ejs', {errors: newMessage.errors});
      } else {
        console.log("The Dragon smiles at your message");
        res.redirect('/');
      }
    })
  },
  commentcreate:function(req,res){
    var message_id = req.params.id;
    Message.findOne({_id: message_id}, function(err, message){
      var newComment = new Comment({name: req.body.name, text: req.body.comment});
      newComment._message = message._id;
      Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){
      });
      newComment.save(function(err){
        if(err){
          console.log(err);
          res.render('index.ejs', {errors: newComment.errors});
        } else {
          console.log("Your comment brings happiness to the werewolf");
          res.redirect("/");
        }
      })
    })
  }
}
