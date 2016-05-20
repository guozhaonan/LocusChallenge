import Ember from 'ember';
//Returns the milliseconds between two dates
export function dateCalculation(params) {
  //Checking to see if all of the parameter values are entered
  if (params[0] && params[1] && params[2] && params[3]){
    var from_date = new Date(params[0]);
    var to_date = new Date(params[1]);
    //Checking if from_date and to_date are valid
    if (from_date && to_date){
      var date_difference = Math.abs(to_date.getTime() - from_date.getTime());
    }
    else {
      return "It appears the values you have entered are invalid, please make sure your date is in the following format(mm/dd/yyyy).";
    }
    var from_time = moment.duration(params[2]).asMilliseconds();
    var to_time = moment.duration(params[3]).asMilliseconds();
    //Checking if from_time and to_time are valid
    if (from_time && to_time){
      var time_difference = to_time - from_time;
      var divisible_milliseconds = date_difference + time_difference;
    }
    else {
      return "It appears you have put in invalid time values, please make sure you follow the 24-hour format (00:00 - 24:00)";
    }
    return divisible_milliseconds;
  }
  else {
    return "You need to add more information. Please fill in the other fields as prompted to receive options.";
  }
}

export default Ember.Helper.helper(dateCalculation);
