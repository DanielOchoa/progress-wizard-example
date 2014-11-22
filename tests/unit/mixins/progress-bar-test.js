import Ember from 'ember';
import ProgressBarMixin from 'progress-wizard-example/mixins/progress-bar';

module('ProgressBarMixin');

// Replace this with your real tests.
test('it works', function() {
  var ProgressBarObject = Ember.Object.extend(ProgressBarMixin);
  var subject = ProgressBarObject.create();
  ok(subject);
});
