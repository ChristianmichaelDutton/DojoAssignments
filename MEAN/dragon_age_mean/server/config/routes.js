//require the controllers here
var dragons = require('../controllers/dragons.js');

//display the routes
module.exports = function(app){
  app.get('/dragons',function (req,res){
    dragons.index(req,res);
  });

  app.post('/dragon/new', function(req,res){
    dragons.create(req,res);
  })
}
