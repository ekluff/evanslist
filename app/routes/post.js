import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    saveComment: function(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('post');
    },

    deletePost: function(post) {
      if (confirm('Delete Post')) {
        post.get('comments').then(function(comments) {
          comments.forEach(function(comment){
            comment.destroyRecord();
          });
        });
        post.destroyRecord();
        this.transitionTo('index');
      }
    },

    editPost: function(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    
  }
});
