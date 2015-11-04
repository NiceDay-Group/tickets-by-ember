import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  busId: DS.attr('number'),
  dateCreated: DS.attr('date'),
});
