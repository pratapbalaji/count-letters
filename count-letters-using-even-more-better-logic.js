function indicesLetters (userInput) {
  var userInputNoSpacesString = userInput.join(""); // convering user argument input array into a string with no spaces
  var outputObject = {}; // defiining an empty output object

  for (var i = 0; i < userInputNoSpacesString.length; i++) { // creating a for loop that will loop through each individual character in the string
    if (outputObject[userInputNoSpacesString[i]] === undefined) { // if the current individual character in the string is undefined in the output object
      outputObject[userInputNoSpacesString[i]] = 1; //add the individual character to the output object and a default character count to 1;
    } else { // if the value is found in the output object
      outputObject[userInputNoSpacesString[i]]++; // increase the character counter by 1 for the corresponding object key as the current individual character
    }
  }

  return outputObject; // returning the output object when all individual character comparisons are over
}

console.log(indicesLetters(process.argv.slice(2))); //printing to console the result of countLetters functiion by taking in user argument