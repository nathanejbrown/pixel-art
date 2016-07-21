$(document).ready(function() {
  console.log('Sanity check');
  var brush = 'white';
  var colorArray = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'purple', 'white'];

  function makePallette() {
    for (x = 0; x < colorArray.length; x++) {
      var colorFrame = '<div id="color" class="' + colorArray[x] + '"></div>';
      $('#pallette').append(colorFrame);
    }
  }

  makePallette();

  function newCanvas() {
    for (x = 0; x < 2520; x++) {
      $('#canvas').append('<div id="twoxtwo"></div>');
    }
  }
  newCanvas();

  $('#pallette').on('click', '#color',function() {
    brush = $(this).css('background-color');
    console.log(brush);
    return brush;
  });
  $('#canvas').on('click', '#twoxtwo', function() {
    $(this).css('background-color', brush);
  });
  $('form').on('submit', '#twoxtwo', function(event) {
    event.preventDefault();
    $(this).css('background-color', 'white');
  });

  var isDown = false;

   $('#canvas > div').mousedown(function() {
      isDown = true;
    })
   $('#canvas > div').mouseup(function() {
      isDown = false;
    });

   $("#canvas > div").mouseover(function() {
     if(isDown) {
        $(this).css('background-color', brush);
     }
    });
});
