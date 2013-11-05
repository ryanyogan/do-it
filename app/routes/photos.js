var PhotosRoute = Ember.Route.extend({
  model: function() {
    return this.storage.findAll(Photo);
  }
});

export default PhotosRoute;
