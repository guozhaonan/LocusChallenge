import Ember from 'ember';
//milliseconds in time interval is params[0]
export function weeksOptions(params) {
  if (params[0]){
    var milliseconds = params[0]
    //31622400000 is the amount of milliseconds in 366 days
    if (milliseconds < 2678400000 && milliseconds >= 604800000){
      return "Option 2";
    }
    else if (milliseconds < 604800000 && milliseconds >= 0){
      return "Option 2";
    }
    else {
      return;
    }
  }
}

export default Ember.Helper.helper(weeksOptions);
