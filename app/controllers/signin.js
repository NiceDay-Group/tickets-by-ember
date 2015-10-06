import Ember from 'ember';

export default Ember.Controller.extend({
  phoneNumber: null,
  password: null,

  actions: {
    login() {
      console.log(this.phoneNumber, '-', this.password);
      this.get('session').authenticate('authenticator:custom', {
        phoneNumber: this.phoneNumber,
        password: this.password
      });
      console.log(this.get('session'));
    }
  }
});
