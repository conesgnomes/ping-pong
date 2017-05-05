// Business Logic

function counter(userInput) {
  var numberArray = new Array(userInput);

  for (var i = 0; i < numberArray.length; i ++) {
    alert((i+1));
  }
  if ()
}

// UI Logic

$(function() {
  $("form#number-submit").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number-input").val());

    console.log(userInput);

    var result = counter(userInput);

    $("ul#result").append("<li>" + result + "</li>");

  });
});
