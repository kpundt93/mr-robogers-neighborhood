// Business logic

function userInput(input) {
  const numArray = [];
  for (let i = 0; i <= input; i++) {
    numArray.push(i);
  }
  const stringArray = numArray.toString().split(",");
  return stringArray;
}

function mrRoboger(input) {
  const finalArray = [];
  const stringArray = userInput(input);
  stringArray.forEach(function(element) {
    if (element.includes("3")) {
      finalArray.push("Won't you be my neighbor?");
    } else if (element.includes("2")) {
      finalArray.push("Boop!");
    } else if (element.includes("1")) {
      finalArray.push("Beep!");
    } else {
      finalArray.push(element);
    }
  });
  return finalArray;
}


// UI logic

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    const input = $("#num-input").val();
    const output = [];
    mrRoboger(input).forEach(function(element) {
      output.push(element + " ");
      $("#result").append("<li>" + output.toString().split(",").pop() + "</li>");
    });
  });

  $("#submit").click(function() {
    $("#result").text("");
  });
});
