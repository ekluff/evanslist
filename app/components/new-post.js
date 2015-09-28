import Ember from 'ember';

export default Ember.Component.extend({
  AddPostForm: false,
  actions: {
    showPostForm: function() {
      this.set('addPostForm', true);
    },
    savePost: function() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        date_added: Date.now()
      };
      this.set('addPostForm', false);
      this.sendAction('savePost', params);
    }
  }
});
