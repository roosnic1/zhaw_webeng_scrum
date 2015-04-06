import Ember from 'ember';
import {
	moduleFor,
	test
}
from 'ember-qunit';

moduleFor('controller:issues', 'Issue Controller', {
	// Specify the other units that are required for this test.
	// needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
	var controller = this.subject();
	assert.ok(controller);
});

test('has prop newissue', function(assert) {
	var controller = this.subject();
	assert.ok(controller.get('newissue'));
});


test('prop issuesTodo only returns todo issues', function(assert) {
	var controller = this.subject();
	var model = [{
		title: 'test1',
		status: 'todo'
	}, {
		title: 'test2',
		status: 'inprogress'
	}, {
		title: 'test3',
		status: 'done'
	}];
	controller.set('model', model);
	assert.equal(controller.get('issuesTodo').length, 1);
});

test('prop issuesInprogress only returns inprogress issues', function(assert) {
	var controller = this.subject();
	var model = [{
		title: 'test1',
		status: 'todo'
	}, {
		title: 'test2',
		status: 'inprogress'
	}, {
		title: 'test3',
		status: 'done'
	}];
	controller.set('model', model);
	assert.equal(controller.get('issuesInprogress').length, 1);
});


test('prop issuesDone only returns done issues', function(assert) {
	var controller = this.subject();
	var model = [{
		title: 'test1',
		status: 'todo'
	}, {
		title: 'test2',
		status: 'inprogress'
	}, {
		title: 'test3',
		status: 'done'
	}];
	controller.set('model', model);
	assert.equal(controller.get('issuesDone').length, 1);
});