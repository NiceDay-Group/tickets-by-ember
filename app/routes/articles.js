import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('article');
    },

    actions: {
        removeArticle(articleId) {
          let article = this.store.peekRecord('article', articleId);
          article.deleteRecord();
          article.save();

        }
    }
});
