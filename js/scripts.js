// Business Logic

function counter(userInput) {
  if (userInput > 0) {
    var numberArray = new Array(userInput);
    var outputArray = [];

    for (var i = 0; i < numberArray.length; i ++) {
      outputArray.push(i+1);

      if (outputArray[i] % 15 === 0) {
        outputArray.splice(i, 1, "ping-pong");
      } else if (outputArray[i] % 3 === 0) {
        outputArray.splice(i, 1, "ping");
      } else if (outputArray[i] % 5 === 0) {
        outputArray.splice(i, 1, "pong");
      }

    } return outputArray;
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
