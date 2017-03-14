var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 8000

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/quoting_dragon');

var DragonSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    quote: { type: String, required: true, maxlength: 255 },
    created:{type: Date, default: Date.now}
});

var Quote = mongoose.model('quotes', DragonSchema);

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});
app.get('/quotes', function(req, res){
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, results){
    if(err) {
      console.log(err);
    }
    res.render('quotes',{dragon: results});
  });
});

app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});

app.listen(port, function(){
    console.log("Let loose the dragon on port " + port);
})
