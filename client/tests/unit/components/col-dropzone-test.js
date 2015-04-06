import Ember from 'ember';
import {
  moduleForComponent,
  test
}
from 'ember-qunit';

moduleForComponent('col-dropzone', 'Component Dropzone', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});



test('css class changes on dragOver', function(assert) {
  var component = this.subject();

  assert.equal(component.dragClass, 'deactivated');

  Ember.run(function() {
    component.dragOver({
      preventDefault: function() {}
    });
  });

  assert.equal(component.dragClass, 'activated');

  Ember.run(function() {
    component.dragLeave({
      preventDefault: function() {}
    });
  });

  assert.equal(component.dragClass, 'deactivated');
});