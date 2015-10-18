import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.route('buy-ticket');
  this.route('protected');
});

export default Router;
