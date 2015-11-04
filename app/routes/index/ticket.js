import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let userId = this.session.get('secure.user._id');
    let tickets = this.store.query('ticket', { userId: userId });
    return tickets.get('firstObject');
  }
});
