var makeMJDancer = function(top, left, timeBetweenSteps, rotate) {
  makeDancer.call(this, 800, -50, timeBetweenSteps);
  this.$node = $('<img src="./gifs/MOONWALK.gif" class="MJ" MJAlt">');
  this.$node.css({'transform': 'rotate(0.25turn)'});
  this.$node.css('bottom', '-100px');
};

makeMJDancer.prototype = Object.create(makeDancer.prototype);
makeMJDancer.prototype.constructor = makeMJDancer;

makeMJDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css('top', '');
  this.$node.animate({bottom: '1000px'}, 4000, 'linear');
};