import Ember from 'ember';
import layout from '../templates/components/issue-dragable';

var { get } = Ember;

export default Ember.Component.extend({
  layout: layout,

  classNames: ['issueDraggable'],
  attributeBindings: ['draggable'],
  draggable: true,

  dragStart(event) {
  	return event.dataTransfer.setData('text/data',get(this, 'content'));
  }
});
