
var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="cat"> <img src="./gifs/catDancer.gif" alt="catAlt"> </span>');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;
makeCatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle(1000);
};
