var express = require('express');
var router = express.Router();

var issues = require('./api/issue');

router.route('/issues')
	.post(function(req,res) {
		issues.addIssue(req,res);
	})
	.get(function(req,res) {
		issues.getAllIssues(req,res);
	});

router.route('/issues/:issue_id')
	.get(function(req,res) {
		issues.getSingleIssue(req,res,req.params.issue_id);
	})
	.put(function(req,res) {
		issues.updateIssue(req,res,req.params.issue_id);
	})
	.delete(function(req,res) {
		issues.deleteIssue(req,res,req.params.issue_id);
	});

module.exports = router;