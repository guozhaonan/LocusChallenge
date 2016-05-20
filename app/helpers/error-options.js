import Ember from 'ember';
//milliseconds in time interval is params[0]
export function errorOptions(params) {
  if (params[0]){
    var milliseconds = params[0];
    //for handling errors
    if (milliseconds < 0){
      return "It appears you've entered a negative time interval, please change your dates and times to ensure this does not happen.";
    }
    else {
      return;
    }
  }
}

export default Ember.Helper.helper(errorOptions);
