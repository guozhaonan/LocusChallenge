import Ember from 'ember';
import moment from 'moment';
//This helper returns the milliseconds between two dates given two dates as inputs
export function dateCalculation(params) {
  //Checking to see if all of the parameter values are entered
  if (params[0] && params[1] && params[2] && params[3]){
    var from_date = new Date(params[0]);
    var to_date = new Date(params[1]);
    //Checking if from_date and to_date are valid
    if (from_date && to_date){
      var date_difference = Math.abs(to_date.getTime() - from_date.getTime());
      var from_time = moment.duration(params[2]).asMilliseconds();
      var to_time = moment.duration(params[3]).asMilliseconds();
      //Checking if from_time and to_time are valid
      if (from_time && to_time){
        var time_difference = to_time - from_time;
        var divisible_milliseconds = date_difference + time_difference;
        return divisible_milliseconds;
      }
      else {
        //This is for nesting into other helper methods
        return "time problem";
      }
    }
    else {
      //This is for nesting into other helper methods
      return "date problem";
    }
  }
  else {
    //This is for nesting into other helper methods
    return "information problem";
  }
}

export default Ember.Helper.helper(dateCalculation);
