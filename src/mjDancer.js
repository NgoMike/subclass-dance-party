var makeMJDancer = function(top, left, timeBetweenSteps, rotate) {
  // debugger;
  makeDancer.call(this, 800, -50, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  this.$node = $('<img src="./gifs/MOONWALK.gif" class="MJ" MJAlt">');
  this.$node.css({'transform' : 'rotate(0.25turn)'});
  this.$node.css('bottom', '-100px');
};

makeMJDancer.prototype = Object.create(makeDancer.prototype);
makeMJDancer.prototype.constructor = makeMJDancer;

makeMJDancer.prototype.step = function() {
  // debugger;
  this.oldStep();
  this.$node.css('top', '');
  this.$node.animate({bottom: '800px'}, 1500, 'linear');
};