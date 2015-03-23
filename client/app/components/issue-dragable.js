import Ember from 'ember';
import layout from '../templates/components/issue-dragable';
import layoutEdit from '../templates/components/issue-dragable-edit';

//var { get } = Ember;

export default Ember.Component.extend({
  layout: layout,

  classNames: ['issueDraggable','col-xs-12'],
  attributeBindings: ['draggable'],
  draggable: true,

  hours: [1,2,3,5,8],

  dragStart(event) {
  	return event.dataTransfer.setData('text/data',this.get('content.id'));
  },

  actions: {
  	edit: function() {
  		this.set('layout',layoutEdit);
  		this.rerender();
  	},
  	save: function() {
  		this.sendAction('actionSave',this.get('content.id'));
  		this.set('layout',layout);
  		this.rerender();
  	},
  	delete: function() {
  		this.sendAction('actionDelete', this.get('content.id'));
  	},
  	cancel: function() {
  		this.sendAction('actionCancel',this.get('content.id'));
  		this.set('layout',layout);
  		this.rerender();
  	}
  }

});
