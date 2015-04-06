import Ember from 'ember';
import {
	moduleForModel,
	test
}
from 'ember-qunit';

moduleForModel('issue', 'Issue Model', {
	// Specify the other units that are required for this test.
	needs: []
});

test('it exists', function(assert) {
	var model = this.subject();
	// var store = this.store();
	assert.ok(!!model);
});

test('Issue is a valid ember-data Model', function(assert) {
	var issue = this.subject({
		title: 'A title for the issue'
	});
	assert.ok(issue);
	assert.ok(issue instanceof DS.Model);
	assert.ok(issue.get('title') === 'A title for the issue');
});