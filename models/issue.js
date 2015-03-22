var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new Schema({
	title: String,
	description: String,
	work: Number,
	user: String,
	status: String
});

module.exports = mongoose.model('Issue',IssueSchema);