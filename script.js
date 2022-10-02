// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // initiate variables
  var pwdLength = 0; 
  var generatedPWD = '';

  // Collect password length from the user
  // Require a number between 8 and 128
  do {
    pwdLength = prompt("Password Length: please select a number between 8 and 128.");
  } while (!Number(pwdLength) || Number(pwdLength) < 8 || Number(pwdLength) > 128);


  // Collect character criteria from the user
  // Options: lowercase, uppercase, numerals and special characters
  var charLC = confirm("Would you like to include lowercase letters?");
  var charUP = confirm("Would you like to include uppercase letters?");
  var charNum = confirm("Would you like to include numbers?");
  var charSpecial = confirm("Would you like to include special characters?");
  
  for(var i=0; i < pwdLength; i++) {
    var newChar = '';
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
