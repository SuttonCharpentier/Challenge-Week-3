// Assignment code here
var characters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var numbers = "0,1,2,3,4,5,6,7,8,9";
var specialCharacters = "!,@,#,$,%,^,&,*,(,),-,_,=,+"
var password = document.getElementById("password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }
// Add event listener to generate button
generateBtn.addEventListener("click", genPassword());