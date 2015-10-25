import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser() {
      let user = this.store.createRecord('user',{
        name: this.name,
        phoneNumber: this.phoneNumber,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        email: this.email,
        });
      user.save();
    }
  }
});
