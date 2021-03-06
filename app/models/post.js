import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  date_added: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  comments: DS.hasMany('comment', {async: true})
});
