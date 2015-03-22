import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  work: DS.attr('number'),
  user: DS.attr('string'),
  status: DS.attr('string')
});
