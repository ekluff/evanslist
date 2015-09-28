import Ember from 'ember';

export default Ember.Component.extend({
  addCategoryForm: false,
  actions: {
    showCategoryForm: function() {
    this.set('addCategoryForm', true);
    },
    saveCategory() {
      var params = {
        title: this.get('title')
      };
      this.set('addCategoryForm', true);
      this.sendAction('saveCategory', params);
    }
  }
});
