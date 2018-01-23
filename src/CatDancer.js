
var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="cat"> <img src="./gifs/catDancer.gif" alt="catAlt"> </span>');
  this.oldStep = makeDancer.prototype.step;
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;
makeCatDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle(1000);
};
