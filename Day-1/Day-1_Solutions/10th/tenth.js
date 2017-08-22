

var array= ["Malayalam", "tree", "boat", "civic", "melt", "level"];
var temp;

function palindrome(){
console.log(array[0]);
for(var i=0;i<=array.length;i++){
	
	console.log(array[i]);
/* remove special characters, spaces and make lowercase*/
//var removeChar = array[i].replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
//var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
//if(removeChar === checkPalindrome){
  
  document.getElementById("abc").innerHTML="<div>"+ array[i] + " is a Palindrome <div>";
//}else{
  
  //document.getElementById("abc").innerHTML="<div>" + array[i] + " is not a Palindrome </div>";
}
}
}

