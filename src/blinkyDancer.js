// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };



var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // create constructor of the call makedancer
  // takes same params
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
};


// construct methods outside
// Create prototypes from makeDancer
// set the constructor
// then set prototype step method
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

// makeBlinkyDancer.prototype.oldStep = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps); // check: this and timeBetween
//   //settimeout "this.step" & "timeBetweenSteps"
// };
