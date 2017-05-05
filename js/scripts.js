// Business Logic

function counter(userInput) {
  if (userInput > 0) {
    var numberArray = new Array(userInput);
    var outputArray = [];

    for (var i = 0; i < numberArray.length; i ++) {
      outputArray.push(i+1);
    }

    return outputArray;
  } else {
      return "You must enter a positive number";
  }

  }

// UI Logic

$(function() {
  $("form#number-submit").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number-input").val());

    var result = counter(userInput);

    $("ul#result").append("<li>" + result + "</li>");

  });
});
