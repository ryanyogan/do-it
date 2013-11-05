var Model = Ember.Object.extend(Ember.Copyable, {
  init: function() {
    if (Em.isNone(this.constructor.storageKey)) {
      throw new Error(Emeber.String.fmt("%@ has to implememnt storagekey property",
                                       [this]));
    if (Em.isNone(this.get('guid'))) {
      this.set('guid', guid());
    }
  },
  //default guid
  guid: null,
  copy: function() {
    return Em.run(this.constructor, 'create', this.serialize());
  },
  serialize: function() {
    throw new Error(Ember.String.fmt("%@ has to imp ser meth which requires json" [this]));
  }
});

// Add a class prop 

Model.reopenClass({
  storageKey: null
});
