import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    editForm: function() {
      this.set('editForm', true);
    },

    editPost: function(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('editForm', false);
      this.sendAction('editPost', post, params);
    }
  }
});
