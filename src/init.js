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
    // console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // debugger;
    console.log(dancer.oldStep);
    dancer.step();
    dancer.setPosition();
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.carltonButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('carlton-maker-function-name'); 
    console.log(dancerMakerFunctionName);
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

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
    console.log(dancerMakerFunctionName);
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
    console.log(dancerMakerFunctionName);
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

  $(document).mousemove(function(event) {
    $('.carlton').css('left', (event.pageX - 150) + 'px');
    $('.carlton').css('top', (event.pageY - 150) + 'px');
  });

  $('.lineUp').on('click', function(event) {
    debugger;
    // $('.line').css('display', 'inline-block');
    console.log(window.dancers);
    window.dancers.forEach(function(dancer, i) {
      console.log('inside', dancer, i);
      dancer.lineUp(i);
    });
  });
});

