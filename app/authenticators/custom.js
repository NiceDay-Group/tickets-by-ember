import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from 'tickets-by-ember/config/environment';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "GET",
        url: `${ENV.host}/api/isLogged`
      }).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  authenticate(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "POST",
        url: `${ENV.host}/api/signin`,
        data: JSON.stringify({
          phoneNumber: options.phoneNumber,
          password: options.password
        })
      }).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  invalidate(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "GET",
        url: `${ENV.host}/api/logout`
      }).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  }
});
