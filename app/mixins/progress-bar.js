import Ember from 'ember';

export default Ember.Mixin.create({
  afterModel: function() {
    var navCtrl  = this.controllerFor('nav');
    var progress = this.get('progressPercent');
    navCtrl.set('progressPercent', progress);
  }
});
