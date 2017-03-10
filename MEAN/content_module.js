//for app File
var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
	static_contents(request, response);
});
server.listen(8000);
console.log("Running in localhost at port 8000");

//cars html File

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>FS Demo - Dojo Page</title>
	<link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
	<h1>Cars!</h1>
	<img src="/images/car01.jpg" alt="/images/car01.jpg">
	<img src="/images/car02.jpg" alt="/images/car02.jpg">
	<img src="/images/car03.jpg" alt="/images/car03.jpg">
	<img src="/images/car04.jpg" alt="/images/car04.jpg">
	<img src="/images/car05.jpg" alt="/images/car05.jpg"><br>
	<a href="/">Back to Cats!</a>
</body>
</html>

//cats html file
<html>
<head>
	<title>FS Demo</title>
	<link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
	<h1>Cats!</h1>
	<img src="/images/cat01.jpg" alt="/images/cat01.jpg">
	<img src="/images/cat02.jpg" alt="/images/cat02.jpg">
	<img src="/images/cat03.jpg" alt="/images/cat03.jpg">
	<img src="/images/cat04.jpg" alt="/images/cat04.jpg">
	<img src="/images/cat05.jpg" alt="/images/cat05.jpg"><br>
	<a href="/views/cars.html">Cars!</a>
</body>
</html>

//static js File
var fs = require('fs');
var path = require('path');

module.exports = function (request, response){
	fs.exists('.'+request.url, function(exists) {
		if(exists) {
			if(request.url === '/') {
				fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
					response.write(contents);
					response.end();
				})
			} else {
				fs.readFile('.'+path.dirname(request.url)+'/'+path.basename(request.url), function(errors, contents) {
					response.write(contents);
					response.end();
				})
			}
		} else {
			response.end('File not Found!!!');
		}
	})
};
