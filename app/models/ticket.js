import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  busTicketId: DS.attr('number'),
  busId: DS.attr('number'),
  dateCreated: DS.attr('date'),
});
