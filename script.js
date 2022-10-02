// Assignment Code
var generateBtn = document.querySelector("#generate");

function getCharCriteria() {
  
  var charLC = confirm("Would you like to include lowercase letters?");
  var charUP = confirm("Would you like to include uppercase letters?");
  var charNum = confirm("Would you like to include numbers?");
  var charSpecial = confirm("Would you like to include special characters?");

  return[charLC, charUP, charNum, charSpecial];
}

function generatePassword() {
  // initiate variables
  var pwdLength = 0; 
  var generatedPWD = '';
  var charTypes = [];

  // Collect password length from the user
  // Require a number between 8 and 128
  do {
    pwdLength = prompt("Password Length: please select a number between 8 and 128.");
  } while (!Number(pwdLength) || Number(pwdLength) < 8 || Number(pwdLength) > 128);


  // Collect character criteria from the user
  // Options: lowercase, uppercase, numerals and special characters
 charTypes = getCharCriteria();
 console.log(charTypes);
    
  if(!charTypes[0] && !charTypes[1] && !charTypes[2] && !charTypes[3]) {
    alert("At least one type of character must be selected. Please try again.");
    charTypes = getCharCriteria();
  }
  

  for(var i=0; i < pwdLength; i++) {
    var newChar = '';

    var charType = Math.floor(Math.random() * 5);
    if (charNum) { newChar = Math.floor(Math.random() * 10); }
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
