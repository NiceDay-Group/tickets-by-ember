import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('bus');
    },

    actions: {
        removeBus(busId) {
            let bus = this.store.peekRecord('bus', busId);
            bus.deleteRecord();
            bus.save();

        }
    }
});
