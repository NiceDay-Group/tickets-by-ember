import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createArticle() {
            let article = this.store.createRecord('article', {
                title: this.title,
                description: this.description,
                text: this.text,
            });

        article.save();
        }
    }
});
