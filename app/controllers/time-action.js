import Ember from 'ember';

export default Ember.Controller.extend({
  //Added Query Params Property and variables to go along with it set to null
  queryParams: ['fromDate', 'toDate', 'fromTime', 'toTime'],
  fromDate: null,
  toDate: null,
  fromTime: null,
  toTime: null
});
