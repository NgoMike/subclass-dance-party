$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(this);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.carltonButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('carlton-maker-function-name'); 
    var dancerMakerFunction = window[dancerMakerFunctionName]; 
    console.log(this);
    var carlton = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    carlton.step();
    carlton.setPosition();
    window.dancers.push(carlton);
    $('body').append(carlton.$node);
  });


  $('.mjButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('mj-maker-function-name'); 
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    var MJ = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    MJ.step();
    MJ.setPosition();
    window.dancers.push(MJ);
    $('body').append(MJ.$node);
  });
  
  $('.catButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('cat-maker-function-name'); 
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    var cat = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    cat.step();
    cat.setPosition();
    window.dancers.push(cat);
    $('body').append(cat.$node);
  });

  $('.kenButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('ken-maker-function-name'); 
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    var ken = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    ken.step();
    ken.setPosition();
    window.dancers.push(ken);
    $('body').append(ken.$node);
  });

  $(document).mousemove(function(event) {
    $('.ken').css('left', (event.pageX - 150) + 'px');
    $('.ken').css('top', (event.pageY - 150) + 'px');
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer, i) {
      dancer.lineUp();
    });
  });
  
  $('.partnerUp').on('click', function(event) {
    window.dancers.forEach(function(dancer, i) {
      var partner = window.dancers[i + 1];
      if (partner !== undefined) {
        var position = pythaTheory(dancer.left, partner.left, dancer.top, partner.top);
        if (position <= 600) {
          dancer.partnerUp();
          partner.partnerUp();
        }
      }
    });
  });

  var pythaTheory = function(x1, x2, y1, y2) {
    var a = Math.pow((x2 - x1), 2);
    var b = Math.pow((y2 - y1), 2);
    var c = Math.sqrt(a + b);
    
    return Math.floor(c);
  };
});

