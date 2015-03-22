var mongoose = require('mongoose');
var Issue = require('../../models/issue');

module.exports.addIssue = function(req, res) {
	var issue = new Issue(req.body.issue);
	issue.save(function(err) {
		if(err) {
			res.send(err);
		}
		res.json({issue: issue});
	});
};

module.exports.getAllIssues = function(req,res) {
	Issue.find(function(err, issues) {
		if(err) {
			res.send(err);
		}
		res.json({issues: issues});
	});
};

module.exports.getSingleIssue = function(req,res,issueId) {
	Issue.findById(issueId, function(err, issue) {
		if(err) {
			res.send(err);
		}
		res.json({issue:issue});
	});
};

module.exports.updateIssue = function(req,res,issueId) {
	Issue.findByIdAndUpdate(issueId, {$set: req.body.issue}, function(err, issue) {
		if(err) {
			res.send(err);
		}
		res.json({issue:issue});
	});
};

module.exports.deleteIssue = function(req,res,issueId) {
	Issue.findByIdAndRemove(issueId, function(err) {
		if(err) {
			res.send(err);
		}
		res.sendStatus(200);
	});
};