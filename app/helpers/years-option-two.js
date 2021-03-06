import Ember from 'ember';
//This helper prints Option 5 if the conditions are met
//params[0] is the time interval in milliseconds
export function yearsOptionTwo(params) {
  if (params[0]) {
    var milliseconds = params[0];
    //31622400000 is the amount of milliseconds in 366 days
    if (milliseconds >= 31622400000) {
      return "Option 5";
    }
    //2678400000 is the amount of milliseconds in 31 days
    else if (milliseconds < 31622400000 && milliseconds >= 2678400000) {
      return "Option 5";
    }
    //604800000 is the amount of milliseconds in 7 days
    else if (milliseconds < 2678400000 && milliseconds >= 604800000) {
      return "Option 5";
    }
    else if (milliseconds < 604800000 && milliseconds >= 0) {
      return "Option 5";
    }
    else {
      return;
    }
  }
  else {
    return;
  }
}

export default Ember.Helper.helper(yearsOptionTwo);
