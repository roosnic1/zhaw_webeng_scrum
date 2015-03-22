import Ember from 'ember';

export default Ember.Controller.extend({
	issuesTodo: function() {
		var model = this.get('model');
		return model.filterBy('status','todo');
	}.property('model'),

	issuesInprogress: function() {
		var model = this.get('model');
		return model.filterBy('status','inprogress');
	}.property('model'),

	issuesDone: function() {
		var model = this.get('model');
		return model.filterBy('status','done');
	}.property('model'),
});
