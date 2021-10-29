function userInput(input) {
  const numArray = [];
  for (let i = 0; i <= input; i++) {
    numArray.push(i);
  }
  const stringArray = numArray.toString().split(",");
  return stringArray;
}

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