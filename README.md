# _Mr. Robogers Neighborhood_

#### By: _**Katie Pundt**_

#### _A web application that returns a range of numbers to the user with substitutions made in certain places to display greetings from Mr. Roboger._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_
* _GitHub Pages_

## Description

_The application will take a user supplied number and return a range of numbers from 0 to the user supplied number. Substitutions will be made for numbers that follow certain rules and greetings from Mr. Roboger will be returned in place of a number._

## Tests
```
Describe: userInput(input)

Test: It should return an array with every whole integer from 0 to the user supplied number.
Code: userInput(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should convert the number array into a string array.
Code: userInput(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]
```

```
Describe: singleDigit(input)

Test: It should recognize when the number is a 1 and return "Beep!".
Code: singleDigit(1);
Expected Output: "Beep!";

Test: It should recognize when the number is a 2 and return "Boop!".
Code: singleDigit(2);
Expected Output: "Boop!";

Test: It should recognize when the number is a 3 and return "Boop!".
Code: singleDigit(3);
Expected Output: "Won't you be my neighbor?";

Test: It should recognize when the number is anything other than a 1, 2, or 3 and return false.
Code: singleDigit(4);
Expected Output: false;
```

```
Describe: multiDigit(input)

Test: It should recognize the string "3" in a multidigit number string and return "Won't you be my neighbor?".
Code: multiDigit("34");
Expected Output: "Won't you be my neighbor?"

Test: It should recognize the string "2" in a multidigit number string and return "Boop!".
Code: multiDigit("24");
Expected Output: "Boop!"

Test: It should recognize the string "1" in a multidigit number string and return "Beep!".
Code: multiDigit("14");
Expected Output: "Beep!"

Test: It should recognize when the string does not contain a "1", "2", or "3" and return false.
Code: multiDigit("44");
Expected Output: false;
```

```
Describe: mrRoboger(input)

Test: It should take an input, loop over the input array, and push the correct phrase into a final array.
Code: mrRoboger(5);
Expected Output: ["0", "1", "2", "Won't you be my neighbor?", "4", "5"]

Test: It should take an input, loop over the input array, and push the correct phrase into a final array. This test adds in branching for "Boop!".
Code: mrRoboger(5);
Expected Output: ["0", "1", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test: It should take an input, loop over the input array, and push the correct phrase into a final array. This test adds in branching for "Beep!".
Code: mrRoboger(5);
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]
```

## GitHub Pages
_View the project here: https://kpundt93.github.io/mr-robogers-neighborhood/_

## Setup/Installation Requirements
* Navigate to https://github.com/kpundt93/mr-robogers-neighborhood
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/mr-robogers-neighborhood.git`
* After cloning the project, navigate into it using the command `cd mr-robogers-neighborhood`
* Use the command `git remote` to confirm the creation of the new local repository
* Open the project with the code editor of your choice

## Known Bugs
* _No known bugs_

## Contact Information
_Katie Pundt, kzpundt@gmail.com_

## License
_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt_