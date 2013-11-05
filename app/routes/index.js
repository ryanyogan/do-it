var IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    // redirect to root of photos
    this.transitionTo('photos');
  }
});

export default IndexRoute;
