import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(model, snapshot) {
    return `${this.host}/${this.namespace}/users/${snapshot.attr('userId')}/tickets`
  }
});
