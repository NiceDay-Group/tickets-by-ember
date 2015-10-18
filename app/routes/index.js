import Ember from 'ember';

export default Ember.Route.extend({
  generateFakeData() {
    this.store.createRecord('article', {
      title: 'Article 1',
      description: 'Description 1',
      text: 'Text 1',
      dateCreated: Date.now(),
    });
    this.store.createRecord('article', {
      title: 'Article 2',
      description: 'Description 2',
      text: 'Text 2',
      dateCreated: Date.now(),
    });
    this.store.createRecord('article', {
      title: 'Article 3',
      description: 'Description 3',
      text: 'Text 3',
      dateCreated: Date.now(),
    });
  },

  activate() {
    this.generateFakeData();
  },

  model() {
    return this.store.peekAll('article');
  }
});
