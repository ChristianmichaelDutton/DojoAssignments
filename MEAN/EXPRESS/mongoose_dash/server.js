var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 8000

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/crafting_character');

var DragonSchema = new mongoose.Schema({
    name:  {type: String, required: true, minlength: 3}
});

var Character = mongoose.model('character', DragonSchema);

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});


app.post('/character', function(req, res){
  Character.create(req.body, function(err){
    if(err) { console.log(err);}
    res.redirect('/character');
  });
});

app.get('/character', function(req, res){//app.get will display the posted info
  Character.find({}, function(err, results){
    if(err) {
      console.log(err);
    }
    res.render('/',{dragon: results});
  });
});

app.get('/:id', function(req, res){
  Character.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('character', { dragon: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Character.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dragon: response[0] });
  })
});

app.post('/:id', function(req, res){
  Character.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

app.post('/:id/delete', function(req, res){
  Character.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

app.listen(port, function(){
    console.log("Let loose the dragon on port " + port);
})
