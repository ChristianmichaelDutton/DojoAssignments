var mongoose = require('mongoose');
var messages = require('../controllers/messages.js');

module.exports = function(app){
  app.get("/", function(req, res){
  	messages.messagefind(req,res)
  })
  app.post("/message", function(req, res){
    messages.messagecreate(req,res)
  })
  app.post("/comment/:id", function(req, res){
    messages.commentcreate(req,res)
  })
}
