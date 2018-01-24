
var makeDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var left = $('body').width() * Math.random();
  var styleSettings = {
    top: 400,
    left: left,
  };
  this.top = 400;
  this.left = left;
  this.$node.css(styleSettings);
};

makeDancer.prototype.partnerUp = function() {
  this.step();
  var styleSettings = {
    transform: 'rotate(180deg)'
  };
  this.$node.css(styleSettings);
};