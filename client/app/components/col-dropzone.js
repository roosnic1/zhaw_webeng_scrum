import Ember from 'ember';
import layout from '../templates/components/col-dropzone';

//var { set } = Ember;

export default Ember.Component.extend({
  layout: layout,

  classNames: ['colDropzone'],
  classNameBindings: ['dragClass'],
  dragClass: 'deactivated',


  dragLeave(event) {
  	event.preventDefault();
  	this.set('dragClass', 'deactivated');
  },

  dragOver(event) {
  	event.preventDefault();
  	this.set('dragClass', 'activated');
  },

  drop(event) {
  	var data = event.dataTransfer.getData('text/data');
  	this.sendAction('dropped',data);

  	this.set('dragClass', 'deactivated');
  }
});
