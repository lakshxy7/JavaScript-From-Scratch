function generatePassword() {

 const lowers = document.getElementById("LC").checked;
 const uppers = document.getElementById("UC").checked;
 const numbers = document.getElementById("NC").checked;
 const symbols = document.getElementById("SC").checked;

 const passLength = parseInt(document.getElementById("pass-length").value);

 if (isNaN(passLength) || passLength <= 0) {
   alert("Enter a valid number");
   return;
 }

 const output = document.getElementById("password-result");

 const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
 const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const numberChars = "0123456789";
 const symbolChars = "@#$%^&*()_+=-?><,/|\\:;{}[]";

 let allowedChars = "";

 allowedChars += lowers ? lowercaseChars : "";
 allowedChars += uppers ? uppercaseChars : "";
 allowedChars += numbers ? numberChars : "";
 allowedChars += symbols ? symbolChars : "";

 if (allowedChars.length === 0) {
   alert("Select at least one character type");
   return;
 }

 let password = "";

 for (let i = 0; i < passLength; i++) {
   const randomIndex = Math.floor(Math.random() * allowedChars.length);
   password += allowedChars[randomIndex];
 }

 output.textContent = password;
}