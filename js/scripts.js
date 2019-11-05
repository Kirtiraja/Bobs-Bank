//---Business Logic
var transaction = function(number1, number2, number3) {
  return number1 + number2 - number3;
};

//---Front End
$(document).ready(function() {
  $("form#userNumbers").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#initialDeposit").val());
    var number2 = parseInt($("#deposit").val());
    var number3 = parseInt($("#withdraw").val());
    var name = $("#name").val();
    console.log(name)
    var result = transaction(number1, number2, number3);
    console.log(result);
    $("#statement").show();
    $("#balance").text(result);
    $("#accountName").text(name + "'s balance: ");
  })
});
