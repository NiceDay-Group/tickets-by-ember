import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQuery(query, modelName) {
    return `${this.host}/${this.namespace}/users/${query.userId}/tickets`;
  },

  urlForCreateRecord(model, snapshot) {
    return `${this.host}/${this.namespace}/users/${snapshot.attr('userId')}/tickets`;
  }
});
