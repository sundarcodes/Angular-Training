function palindrome(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
  
  document.getElementById("abc").innerHTML="<div>"+ myString + " is a Palindrome <div>";
}else{
  
  document.getElementById("abc").innerHTML="<div>" + myString + " is not a Palindrome </div>";
}
}

