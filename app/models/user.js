import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phoneNumber: DS.attr('number'),
  password: DS.attr('string'),
  passwordConfirm: DS.attr('string'),
  email: DS.attr('string'),
  tickets: DS.hasMany('ticket'),
});
