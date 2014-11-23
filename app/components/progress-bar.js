import Ember from 'ember';

export default Ember.Component.extend({
  setupProgress: function() {
    var progress = this.get('progress');
    var bar      = this.$().find('.progress');
    bar.css('width', progress + '%');
  }.on('didInsertElement').observes('progress')
});
