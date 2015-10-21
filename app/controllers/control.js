import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        buttonClick() {
            let ticketId = this.get('ticketId');
            console.log(ticketId);
            alert('Yes');
        }
    }
});
