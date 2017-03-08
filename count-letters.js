function countLetters (userInput) {
  var userInputNoSpacesString = userInput.join(""); // convering user argument input array into a string with no spaces
  var userInputNoSpacesArray =  userInputNoSpacesString.split(""); // converting the string with no spaces into an array of individual characters using the split function
  var uniqueArray = []; // defining an empty array that's going to contain a set of unique individual characters from the user argument
  var outputObject = {};

  for (var i = 0; i < userInputNoSpacesArray.length; i++) {
    if (uniqueArray.indexOf(userInputNoSpacesArray[i])<0) uniqueArray.push(userInputNoSpacesArray[i]); // if a value is not found in an array, the indexOf function will return a -1, therefore, checking if indexOf is -1, if it is, add the individual character to the unique array
  }

  for (var j = 0; j < uniqueArray.length; j++) { // starting a for loop that will go through each unique individual character in the unique array
    var characterCounter = 0; // keeping a character counter to keep track of the number of times the individual charcter in the first array that contains all individual characters
      for (var k = 0; k < userInputNoSpacesArray.length; k++) { // starting another for loop that will compare the unique individual character in the unique array to each individual character in the first array
        if (userInputNoSpacesArray[k] === uniqueArray[j]) characterCounter++; //if the unique individual character matches the individual character in the first array, the character counter will increment by 1
      }
    outputObject[uniqueArray[j]] = characterCounter; //after the previous for loop is done, the results of the current unique individual character and the related character counter is recorded in an output object
  }

  return outputObject; // returning the output object when all individual character comparisons are over
}

console.log(countLetters(process.argv.slice(2))); //printing to console the result of countLetters functiion by taking in user argument