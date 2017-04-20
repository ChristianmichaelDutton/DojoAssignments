//require the controllers here
var friends = require('../controllers/friends.js');

//display the routes
module.exports = function(app){
  app.get('/friends',function (req,res){
    friends.index(req,res);
  });

  app.post('/friend/new', function(req,res){
    friends.create(req,res);
  });

  app.delete('/friend/:id', function(req, res){
    friends.delete(req,res);
    console.log(friends.delete(req,res));
  });
}
