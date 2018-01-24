describe('mjDancer', function() {
  
  var mjDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    mjDancer = new makeMJDancer(10, 20, timeBetweenSteps);
  });

  it('should have a step function', function() {
    expect(mjDancer.step).to.be.a('function');   
  });

  it('should have a jQuery $node object', function() {
    expect(mjDancer.$node).to.be.an.instanceof(jQuery);
  });
});