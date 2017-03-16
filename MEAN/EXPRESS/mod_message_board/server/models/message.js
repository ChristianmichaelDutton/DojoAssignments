// require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
MessageSchema.path('name').required(true, "Don't give me a blank name!");
MessageSchema.path('message').required(true, "Don't give me a blank message!");
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
	name: String,
	text: String
	// _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
CommentSchema.path('name').required(true, "Don't give me a blank name!");
CommentSchema.path('text').required(true, "Don't give me a blank message!");
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");
