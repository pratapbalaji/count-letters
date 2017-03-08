function countLetters (userInput) {
  var userInputNoSpacesString = userInput.join(""); // convering user argument input array into a string with no spaces
  var userInputNoSpacesArray =  userInputNoSpacesString.split(""); // converting the string with no spaces into an array of individual characters using the split function
  var uniqueArray = []; // defining an empty array that's going to contain a set of unique individual characters from the user argument
  var outputObject = {}; // defiining an empty output object

  for (var i = 0; i < userInputNoSpacesArray.length; i++) { // creating a for loop that will loop through each individual character in the first array and compare it to an array with unique values
    if (uniqueArray.indexOf(userInputNoSpacesArray[i])<0) { // if a value is not found in an array, the indexOf function will return a -1, therefore, checking if indexOf is -1
      uniqueArray.push(userInputNoSpacesArray[i]); //add the individual character to the unique array since the value was not found in the unique array
      outputObject[userInputNoSpacesArray[i]] = 1; //add the individual character to the output object and a default character count of 1;
    } else { // if the value is found in the unique array
      outputObject[userInputNoSpacesArray[i]]++; // increase the character counter by 1 for the corresponding object key as the current individual character
    }
  }

  return outputObject; // returning the output object when all individual character comparisons are over
}

console.log(countLetters(process.argv.slice(2))); //printing to console the result of countLetters functiion by taking in user argument