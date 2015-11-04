import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let userId = this.session.get('secure.user._id');
    return this.store.query('ticket', { userId: userId })
      .then(tickets => tickets.get('firstObject'));
  }
});
