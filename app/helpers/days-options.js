import Ember from 'ember';
//milliseconds in time interval is params[0]
export function daysOptions(params) {
  if (params[0]){
    var milliseconds = params[0]
    //31622400000 is the amount of milliseconds in 366 days
    if (milliseconds < 604800000 && milliseconds >= 0){
      return "Option 1";
    }
    else {
      return;
    }
  }
}

export default Ember.Helper.helper(daysOptions);
