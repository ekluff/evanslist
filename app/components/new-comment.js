import Ember from 'ember';

export default Ember.Component.extend({
  addCommentForm: false,
  actions: {
    showCommentForm: function() {
      this.set('addCommentForm', true);
    },
    saveComment: function() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.set('addCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
