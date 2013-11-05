var PhotoNewRoute = Ember.Route.extend({
  model: function() {
    // provide a new photo to the template
    return Photo.createo({});
  }
});
