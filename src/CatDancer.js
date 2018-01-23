
var makeCatDancer = function(top, left, timeBetweenSteps) {
  // create constructor of the call makedancer
  // takes same params
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="cat"> <img src="./gifs/catDancer.gif" alt="catAlt"> </span>');
  this.oldStep = makeDancer.prototype.step;
};


// construct methods outside
// Create prototypes from makeDancer
// set the constructor
// then set prototype step method
makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;
makeCatDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle();
};
