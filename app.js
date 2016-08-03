//document.ready (function() {

var redsquare  = 1;
var greensquare  = 2;
var yellowsquare = 3;
var bluesquare  = 4;

var colorPicker = randomNumber(1, 4);

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}



$(document).ready(function() {
  $('#redsquare').on('click', function() {
    if (colorPicker == redsquare) {
      var clickResult = $(this).attr('#redsquare');
      console.log("Success: You clicked red!");
    } else {
        alert(("Please try again."));
        console.log("Please try again.");
    };
  });
  $('#greensquare').on('click', function() {
  if (colorPicker == greensquare) {
    console.log("You clicked green!");
    var clickResult = $(this).attr('#greensquare');
  } else {
      alert(("Please try again."));
      console.log("Please try again.");
    };
});

$('#yellowsquare').on('click', function() {
  if (colorPicker == yellowsquare) {
    console.log("You clicked yellow!");
    var clickResult = $(this).attr('#yellowsquare');
  } else {
      alert(("Please try again."));
      console.log("Please try again.");
    };
});

$('#bluesquare').on('click', function() {
  if (colorPicker == bluesquare) {
    console.log("You clicked blue!");
    var clickResult = $(this).attr('#bluesquare');
  } else {
      alert(("Please try again."));
      console.log("Please try again.");
    };
});
});







//randomNumber();
