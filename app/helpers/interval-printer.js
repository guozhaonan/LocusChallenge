import Ember from 'ember';
//intervalPrinter takes one parameter, time_interval at params[0]
export function intervalPrinter(params) {
  var time_interval = params[0];
  if (time_interval){
    if (time_interval === "date problem"){
      return "It seems you need to format your date properly. Please be sure to format it as so: mm/dd/yyyy";
    }
    if (time_interval === "time problem"){
      return "It seems you need to format your time properly. Please make sure your time is between 00:00 and 24:00";
    }
    if (time_interval === "information problem"){
      return "It seems you still need to provide more information. Please fill out all of the text boxes.";
    }
    else {
      var iterator = time_interval / 60000;
      var minutes = iterator % 60;
      iterator /= 60;
      var hours = iterator % 24;
      iterator /= 24;
      var days = iterator;
      var printer = days + " days, " + hours + " hours, " + minutes + " minutes";
      return printer;
    }
  }
}

export default Ember.Helper.helper(intervalPrinter);
