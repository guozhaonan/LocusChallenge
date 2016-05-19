import Ember from 'ember';
//Returns the milliseconds between two dates
export function dateCalculation(params) {
  var from_date = new Date(params[0]);
  var to_date = new Date(params[1]);
  var time_difference = Math.abs(to_date.getTime() - from_date.getTime());
  return time_difference;
}

export default Ember.Helper.helper(dateCalculation);
