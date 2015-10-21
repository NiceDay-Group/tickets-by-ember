import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createBus() {
            let bus = this.store.createRecord('bus', {
                route: this.route,
            });
        bus.save();
        },

        removeBus(busId) {
            let bus = this.store.peekRecord('bus', busId);
            bus.deleteRecord();
            bus.save();

        }
    }
});
