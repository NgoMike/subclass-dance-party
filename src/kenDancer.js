var makeKenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ken"><img src="./gifs/ken.gif" alt="kenAlt"></span>');
};

makeKenDancer.prototype = Object.create(makeDancer.prototype);
makeKenDancer.prototype.constructor = makeKenDancer;

makeKenDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle(1000);
};