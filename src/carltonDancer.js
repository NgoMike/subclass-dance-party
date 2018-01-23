var makeCarltonDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  this.$node = $('<img src="./gifs/carlton.gif" class="carlton" alt="carltonAlt">');
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;

makeCarltonDancer.prototype.step = function() {
  this.oldStep();
  this.$node.slideToggle(2000);
};
