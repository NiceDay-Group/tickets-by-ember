import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    let userId = this.session.get('secure.user._id');
    return this.store.query('ticket', { userId: userId });
  }
});
