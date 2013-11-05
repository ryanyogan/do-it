var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // List of all uploaded photos
  this.resource('photos', { path:'/photos' });
  this.resource('photo.new', { path:'/photo/new' });
  this.resource('photo', { path:'/photo/:guid'}, function() {
    this.route('edit');
  });
});

export default Router;
