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
				debug.error("No issue with ID: " + issueId);
			}

		}
	}


});
