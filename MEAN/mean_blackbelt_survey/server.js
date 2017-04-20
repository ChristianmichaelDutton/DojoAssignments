//STEP 1. Initial setup of files  --do this once and you can copy this for any other future framework.
//1.Create a project name folder
//2.cd inside the project name folder
//3.bower init (hit enter a lot) Note: this creates a bower.json file.
//4. bower install angular --save Note: using --save allows you to look in your bower.json file and see
//what you installed in bower_components.
//5. bower install angular-route --save
//6. bower install bootstrap --save
//7. mkdir client folder Note: this is where we'll store our static / client-side files. Sometimes,
//this file is called the static folder.
//8. cd client folder
//9. mkdir assets folder Note: your generic styles.css, images, and javascript files are here.
//10. cd assets folder
//11. mkdir css folder, images folder, js folder
//12. cd css folder, touch styles.css file
//13. cd ..
//14. cd js folder, touch javascript.js file
//15. cd ..
//16. mkdir partials (or you can call it views)
//17. touch index.html
//18. cd ..
//19. mkdir server folder
//20. cd server folder
//21. mkdir config folder, controllers folder, factories folders, models folder
//22. cd config folder
//23. touch mongoose.js, touch routes.js
//24. cd ../../
//25. touch server.js
//26. npm init -y Note: this creates the package.json file
//27. npm install express --save
//28. npm install body-parser --save
//29. npm install mongoose --save

//read to start creating your app!

//STEP 2. Enter variables on server.js
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000,
    root = __dirname;

//STEP 3. Set var app to express()
var app = express();

// app.use(bodyParser.urlencoded({extended:true}));
//STEP 9. Create the body-parser link to spit out json data.
app.use(bodyParser.json());

//STEP 6. Use express to have the server look for static files in bower and client folders.
app.use(express.static(root+ '/client'));
app.use(express.static(root+ '/bower_components'));

//STEP 7. Populate your index.html file.

//STEP 4. Write a test function--comment this command out after confirming
// app.get('/', function(req, res){
//   res.send("There do be dragons here!");
// });

//STEP 5. Write your listening app function
app.listen(port, function(){
  console.log("Let loose the dragon on port "+port);
})
