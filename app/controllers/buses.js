import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createBus() {
            let bus = this.store.createRecord('bus', {
                route: this.route,
            });

        bus.save();
        }
    }
});
