import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    savePost: function(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save().then(function() {
        params.category.save().then(function() {
          newPost.reload();
        });
      });
      this.transitionTo('index');
    },
    deleteCategory: function(category) {
      if (confirm('Delete Category')) {
        // category.get('posts').then(function(posts) {
        //   posts.forEach(function(post){
        //     post.destroyRecord();
        //   });
        // });
        category.destroyRecord();
        this.transitionTo('index');
      }
    },

    editCategory: function(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo('category');
    }
  }
});
