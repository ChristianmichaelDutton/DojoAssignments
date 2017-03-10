// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var image = ["red","blue","green","tiamat","elf","lunavesca","myraeth","rithine"];
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:

    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/dragons") {
         fs.readFile('views/dragons.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/elves") {
         fs.readFile('views/elves.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/elves/new") {
         fs.readFile('views/elf.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
        });
    }
    else if(request.url === '/images/red.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/red.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/blue.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/blue.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/green.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/green.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/tiamat.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/tiamat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/elf.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/elf.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/lunavesca.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/lunavesca.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/myraeth.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/myraeth.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else if(request.url === '/images/rithine.jpg'){
  // notice we won't include the utf8 encoding
        fs.readFile('./images/rithine.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
      })
    }
    else {
        response.end('File not found!!!');
    }
});

// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
