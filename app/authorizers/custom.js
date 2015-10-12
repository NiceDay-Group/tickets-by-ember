import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    requestOptions.contentType = 'application/json';
    requestOptions.xhrFields = {
      withCredentials: true
    };
  }
});
