// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "./static")));
// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/adventurer's_guild");

var CharacterSchema = new mongoose.Schema({
    name: String,
    class: String,
    race: String
});

var Character = mongoose.model('Character', CharacterSchema);

// Routes go here!
app.get('/', function(req, res){
  Character.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { dragon: results });
  });
});

app.post('/', function(req, res){
  Character.create(req.body, function(err, result){
    if (err) { console.log(err);}
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Character.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { dragon: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Character.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dragon: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Character.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Character.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Let loose the dragon on port ", port);
})
