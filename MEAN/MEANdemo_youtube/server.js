//declaration of variables
var express = require('express'),
    app = express(),
    port = 8000,
    root = __dirname,
    path = require('path'),
    mongojs = require('mongojs'),
    db = mongojs('contactlist',['contactlist']),
    bodyParser = require('body-parser');

//body-parser and express server usage
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(root,'client')));
app.use(express.static(path.join(root,'bower_components')));

//need to connect to the mongoose db and the routes file

app.get('/contactlist', function(req, res){
  db.contactlist.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function(req, res){
  console.log(req.body);
  function generate(){
      var modifier;
      var scores = [];
      for (var i = 1; i < 5; i++){
        var roll = Math.floor((Math.random() * 6) + 1);
        scores.push(roll);
      }
      var min = scores[0];
      var sum = scores[0];
      var newsum;
      for (var i = 1; i < scores.length; i ++){
        if (scores[i] < min){
          min = scores[i];
        }
        sum = sum + scores[i];
      }
      var newroll;
      newroll = sum - min;
      if (newroll === 3){
        modifier = -2;
      }
      else if (newroll > 3 && newroll < 6) {
        modifier = -1;
      } else {
        modifier = Math.floor((newroll/3)-2);
      }
      return modifier;
    }

  db.contactlist.insert(req.body,function(err,docs){
  db.contactlist.update({name:req.body.name},{$set:{
    communication: generate(),
    constitution: generate(),
    cunning: generate(),
    dexterity: generate(),
    magic: generate(),
    perception: generate(),
    strength: generate(),
    willpower: generate(),
  }});
    res.json(docs);
  });
})

app.delete('/contactlist/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,docs){
    res.json(docs);
  })
})

app.get('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json(docs);
  });

app.put('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)}, update: {$set: {name: req.body.name,
  class: req.body.class, race: req.body.race}}, new:true}, function(err, docs){
    res.json(docs);
    })
  })
})


app.listen(port, function(){
  console.log('Let loose the dragon on port '+port);
})
