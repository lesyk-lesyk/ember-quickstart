import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Douglas Crockford', 'Bill Gates', 'Mark Zuckerberg']
  }
});
