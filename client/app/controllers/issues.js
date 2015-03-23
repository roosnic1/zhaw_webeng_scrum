import Ember from 'ember';

export default Ember.Controller.extend({
	issuesTodo: function() {
		var model = this.get('model');
		return model.filterBy('status','todo');
	}.property('model.@each.status'),

	issuesInprogress: function() {
		var model = this.get('model');
		return model.filterBy('status','inprogress');
	}.property('model.@each.status'),

	issuesDone: function() {
		var model = this.get('model');
		return model.filterBy('status','done');
	}.property('model.@each.status'),

	hours: [1,2,3,5,8],
	status: ['todo','inprogress','done'],

	newissue: {
		title: '',
		description: '',
		work: 1,
		user: '',
		status: 'todo'
	},

	actions: {
		issueDropped: function(dropZone,issueId) {
			console.log(dropZone);
			console.log(issueId);
			var issueSearch = this.get('model').filterBy('id',issueId);
			if(issueSearch.length > 0) {
				var issue = issueSearch[0];
				issue.set('status',dropZone);
				issue.save();
			} else {
				console.error("No issue with ID: " + issueId);
			}

		},
		save: function(issueId) {
			console.log('save');
			var issueSearch = this.get('model').filterBy('id',issueId);
			if(issueSearch.length > 0) {
				var issue = issueSearch[0];
				issue.save();
			} else {
				console.error("No issue with ID: " + issueId);
			}
		},
		cancel: function(issueId) {
			console.log('cancel');
			var issueSearch = this.get('model').filterBy('id',issueId);
			if(issueSearch.length > 0) {
				var issue = issueSearch[0];
				issue.rollback();
			} else {
				console.error("No issue with ID: " + issueId);
			}
		},
		delete: function(issueId) {
			console.log('delete');
			var issueSearch = this.get('model').filterBy('id',issueId);
			if(issueSearch.length > 0) {
				var issue = issueSearch[0];
				issue.destroyRecord();
			} else {
				console.error("No issue with ID: " + issueId);
			}
		},
		addIssue: function() {
			if(this.get('newissue.title') !== '' && this.get('newissue.user') !== '') {
				console.log("creating new issue");
				var issue = this.store.createRecord('issue');
				issue.set('title',this.get('newissue.title'));
				issue.set('description',this.get('newissue.description'));
				issue.set('work',this.get('newissue.work'));
				issue.set('user',this.get('newissue.user'));
				issue.set('status',this.get('newissue.status'));
				console.log(issue);
				issue.save();
				this.set('newissue',{
					title:'',
					description:'',
					work:1,
					user:'',
					status:'todo'
				});
			} else {
				console.log('No Title or User');
			}
		}
	}


});
