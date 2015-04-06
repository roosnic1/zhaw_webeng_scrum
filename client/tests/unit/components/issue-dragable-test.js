import {
  moduleForComponent,
  test
}
from 'ember-qunit';

moduleForComponent('issue-dragable', {
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

test('has work hours array with 5 entries', function(assert) {
  var component = this.subject();
  assert.equal(component.get('hours').length, 5);
});

test('component is dragable', function(assert) {
  var component = this.subject();
  assert.ok(component.get('draggable'));
});