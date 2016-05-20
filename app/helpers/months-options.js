import Ember from 'ember';
//milliseconds in time interval is params[0]
export function monthsOptions(params) {
  if (params[0]){
    var milliseconds = params[0];
    //2678400000 is the amount of milliseconds in 31 days
    if (milliseconds < 31622400000 && milliseconds >= 2678400000){
      return "Option 3";
    }
    //604800000 is the amount of milliseconds in 7 days
    else if (milliseconds < 2678400000 && milliseconds >= 604800000){
      return "Option 3";
    }
    else if (milliseconds < 604800000 && milliseconds >= 0){
      return "Option 3";
    }
    else {
      return;
    }
  }
}

export default Ember.Helper.helper(monthsOptions);
