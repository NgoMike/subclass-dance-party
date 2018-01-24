var makeCarltonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./gifs/carlton.gif" class="carlton" alt="carltonAlt">');
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;

makeCarltonDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle(2000);
};
