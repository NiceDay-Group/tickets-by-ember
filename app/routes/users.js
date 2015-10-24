import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('user');
    },
    actions: {
        removeUser(userId) {
            let user = this.store.peekAll('user', userId);
            user.deleteRecord();
            user.save();
        }
    }
});
