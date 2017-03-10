var express = require("express");
var app = express();
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now let's set the view engine itself so that express knows that we are
// using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.use(express.static(__dirname + "/static"));
app.listen(8000,function(){
  console.log("Yeah, 8000.");
})
