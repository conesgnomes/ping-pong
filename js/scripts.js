// Business Logic

function counter(userInput) {
  var numberArray = [];
  var inputArray = numberArray.push(userInput);
  for (index = 0; index < numberArray; index += 1) {
    alert(numberArray);
  }

  // for (index=)
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
