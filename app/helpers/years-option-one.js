import Ember from 'ember';
//This helper prints Option 4 if the conditions are met
//params[0] is the time interval in milliseconds
export function yearsOptionOne(params) {
  if (params[0]){
    var milliseconds = params[0];
    //31622400000 is the amount of milliseconds in 366 days
    if (milliseconds >= 31622400000){
      return "Option 4";
    }
    //2678400000 is the amount of milliseconds in 31 days
    else if (milliseconds < 31622400000 && milliseconds >= 2678400000){
      return "Option 4";
    }
    //604800000 is the amount of milliseconds in 7 days
    else if (milliseconds < 2678400000 && milliseconds >= 604800000){
      return "Option 4";
    }
    else if (milliseconds < 604800000 && milliseconds >= 0){
      return "Option 4";
    }
    else {
      return;
    }
  }
  else {
    return;
  }
}

export default Ember.Helper.helper(yearsOptionOne);
