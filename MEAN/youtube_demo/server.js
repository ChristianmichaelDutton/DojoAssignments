var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));

app.use('/js', express.static(__dirname + '/client/js'));

app.use(bp.json())
app.listen( port, function() {
  console.log( `Let loose the dragon on ${ port }` );
});
