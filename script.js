// Assignment Code
var generateBtn = document.querySelector("#generate");

function getCharCriteria() {
  
  // Get password criteria and return it as an array
  var charLC = confirm("Would you like to include lowercase letters?");
  var charUP = confirm("Would you like to include uppercase letters?");
  var charNum = confirm("Would you like to include numbers?");
  var charSpecial = confirm("Would you like to include special characters?");

  return[charLC, charUP, charNum, charSpecial];
}

function generatePassword() {

  // Initiate variables
  var pwdLength = 0; 
  var generatedPWD = "";
  var charTypes = [];
  var charLetters = "abcdefghijklmnopqrstuvwxyz";
  var charSpecials = "!@#$%^&*";

  // Collect password length from the user
  // Require a number between 8 and 128
  do {
    pwdLength = prompt("Password Length: please select a number between 8 and 128.");
  } while (!Number(pwdLength) || Number(pwdLength) < 8 || Number(pwdLength) > 128);


  // Collect character criteria from the user
  // Options: lowercase, uppercase, numerals and special characters
  // Require at least one type of character
  charTypes = getCharCriteria();
    
  while (!charTypes[0] && !charTypes[1] && !charTypes[2] && !charTypes[3]) {
    alert("At least one type of character must be selected. Please try again.");
    charTypes = getCharCriteria();
  }

  // Load an array with character types to include in password
  var activeChars = [];
  if(charTypes[0]) { activeChars.push("charLC"); }
  if(charTypes[1]) { activeChars.push("charUP"); }
  if(charTypes[2]) { activeChars.push("charNum"); }
  if(charTypes[3]) { activeChars.push("charSpecial"); }


  // Build the password one character at a time according to user criteria
  // Randomize using only character types requested assigned length

  // Initiate variables
  var counter = 0;
  var newChar = "";
  var randomSelect = 0;
  var randomSpot = 0;
  
  for (var i=0; i < pwdLength; i++) {

    // Select a random category
    randomSelect = Math.floor(Math.random() * activeChars.length);

    // Add a random character from the selected category to the end of the password
    switch(activeChars[randomSelect]) {

      case "charLC":
        randomSpot = Math.floor(Math.random() * charLetters.length);
        newChar = charLetters.charAt(randomSpot);
        charLCused = true;
        break;

      case "charUP":
        randomSpot = Math.floor(Math.random() * charLetters.length);
        newChar = charLetters.charAt(randomSpot);
        newChar = newChar.toUpperCase();
        charUPused = true;
        break;

      case "charNum":
        newChar = Math.floor(Math.random() * 10);
        charNumused = true;
        break;

      case "charSpecial":
        randomSpot = Math.floor(Math.random() * charSpecials.length);
        newChar = charSpecials.charAt(randomSpot);
        charSpecialused = true;
        break;

      default:
        // should never get called
        console.log("Error in category selection.");
        break;
    }

    // Add the new character to the end of the password string
    generatedPWD += newChar;
  }

  return generatedPWD;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
