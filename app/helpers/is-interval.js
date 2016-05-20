import Ember from 'ember';
//isInterval accepts 3 parameters: lower_limit as params[0], upper_limit as params[1], and time_interval as params[2]
export function isInterval(params) {
  if (params[0] && params[1] && params[2]){
    var lower_limit = params[0];
    var upper_limit = params[1];
    var time_interval = params[2];
    if (time_interval >= lower_limit && time_interval < upper_limit ){
      return true;
    }
    else {
      return false;
    }
  }
  else {
      return false;
  }
}

export default Ember.Helper.helper(isInterval);
