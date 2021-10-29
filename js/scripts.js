// Business logic

function userInput(input) {
  const numArray = [];
  for (let i = 0; i <= input; i++) {
    numArray.push(i);
  }
  const stringArray = numArray.toString().split(",");
  return stringArray;
}


// UI logic

function singleDigits(input) {
  if (input === 1) {
    return "Beep!";
  } else if (input === 2) {
    return "Boop!";
  } else if (input === 3) {
    return "Won't you be my neighbor?";
  } else {
    return false;
  }
}

function multiDigit(input) {
  if (input.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (input.includes("2")) {
    return "Boop!";
  } else if (input.includes("1")) {
    return "Beep!";
  } else {
    return false;
  }
}