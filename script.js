// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // initiate variables
  var pwdLength = 0; // between 8 and 128
  const charTypes = []; // array - lower, upper, numeric, special

  var pwdLength = prompt("How many characters should it be? (between 8 and 128)");
  // console.log(Number(pwdLength));

  if(Number(pwdLength)) {
    console.log("That's a number.");
  } else {
    console.log("nope.");
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
