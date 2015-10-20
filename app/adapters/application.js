import DS from 'ember-data';
import ENV from 'tickets-by-ember/config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: ENV.host
});
