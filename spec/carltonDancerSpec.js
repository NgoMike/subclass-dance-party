describe('carltonDancer', function() {
  
  var carltonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new makeMJDancer(10, 20, timeBetweenSteps);
  });

  it('should have a step function', function() {
    expect(carltonDancer.step).to.be.a('function');   
  });

  it('should have a jQuery $node object', function() {
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(carltonDancer, 'step');

      expect(carltonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carltonDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(carltonDancer.step.callCount).to.be.equal(2);
    });
  });
});