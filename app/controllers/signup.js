import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    signup() {
      let user = this.store.createRecord('user', {
        name: this.name,
        phoneNumber: this.phoneNumber,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        email: this.email,
      });

      user.save()
        .then((user) => {
          this.session.authenticate('authenticator:custom', {
            phoneNumber: this.phoneNumber,
            password: this.password,
          });

          this.set('message', 'User was successfully created');
        });
    }
  }
});
