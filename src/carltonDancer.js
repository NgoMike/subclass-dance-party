

// make carlton class(top,left, timeBetweenSteps)
// reference makedancer call 
// make prototype for slides Up and down toggle

var makeCarltonDancer = function(top, left, timeBetweenSteps) {
  debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  this.$node = $('<img src="../gifs/carlton.gif" alt="carltonAlt">');
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;

makeCarltonDancer.prototype.step = function() {
  this.oldStep();
  this.$node.slideToggle();
};