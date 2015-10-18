import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    buyTicket() {
      let ticket = this.store.createRecord('ticket', {
        userId: this.session.get('secure.user._id'),
        busId: this.busId,
      });

      ticket.save();
    }
  }
});
