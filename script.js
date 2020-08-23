// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Variables
let upperCase = ["QRSTUVYUXYABZCDGHEFIJKLMNOP"];
let lowerCase = ["aopqrstuvwxyzdefghbcijklmn"];
let numbers =   ["1567234890"];
let symbols =   ["!@#~$%^&*()_+="];


//password generater

function generatePassword() {
  let passwordLength = prompt("8");
  let length = 8,
  charset = "nopcdefghabijklmqrstuvwxyzIJKLMNOSTUVWXPABCDEFGHQRYZ0123456789",
  retVal = "";

  if (!passwordLength){
    console.log("No value");
    return;

  } else if (passwordLength <8 || passwordLength > 8){
    console.log("Add at least 8 characters")
    return;
    
  } else {
    let confirmUpperCase =  confirm("Add a Uppercase")
    let confirmLowerCase =  confirm("Add a Lowercase")
    let confirmNumbers =    confirm("Add Numbers")
    let confirmSymbols =    confirm("Add a Symbols")

    if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
      console.log("Must add at least a Special Character");
      
    } else {
      let allChar = [];
      if (confirmUpperCase) allChar = allChar.concat(upperCase);
      if (confirmLowerCase) allChar = allChar.concat(lowerCase);
      if (confirmNumbers) allChar = allChar.concat(numbers);
      if (confirmSymbols) allChar = allChar.concat(symbols);

      let password = "";
      for (let i =0; i <= passwordLength; ++i){
        let randomChar = allChar[Math.floor(Math.random() * allChar.length)]
        password = password + randomChar
      }
      return password
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

