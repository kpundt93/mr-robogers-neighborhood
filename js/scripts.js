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
  }
  return false;
}