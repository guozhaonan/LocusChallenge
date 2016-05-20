import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['fromDate', 'toDate', 'fromTime', 'toTime'],
  fromDate: null,
  toDate: null,
  fromTime: null,
  toTime: null,
});
