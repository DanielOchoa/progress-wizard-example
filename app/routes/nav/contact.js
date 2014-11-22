import Ember from 'ember';
import ProgressBarRouteMixin from '../../mixins/progress-bar';

export default Ember.Route.extend(ProgressBarRouteMixin, {
  progressPercent: 90
});
