var mongoose = require('mongoose');
var Issue = require('../../models/issue');

module.exports.addIssue = function(req, res) {
	var issue = new Issue(req.body.issue);
	issue.save(function(err) {
		if(err) {
			res.send(err);
		}
		res.json({issue: issue});
	})
}