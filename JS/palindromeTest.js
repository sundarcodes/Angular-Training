function palindromeTest(){
var inputString = document.getElementById("str").value;
var res="";
if(inputString)
{
res = isPalindrome(inputString);
document.write("</br> <strong>" +res +"</strong>");
}
else
{
alert("Enter valid String");
}
//res = (Object.values(list));
//document.write("Values of the list is : "+res +"</br>");
}


function isPalindrome(param){
var Palindrome=false;
var result = param.split('').reverse().join('');
//document.write("Result String after reverse is :" +result);
if(param==result)
{
Palindrome=true;
return Palindrome;
//document.write("</br> <strong>" +Palindrome +"</strong>");
}
else {
return Palindrome;
//document.write("</br> <strong>" +Palindrome +"</strong>");

}
}


/* Function to test the palindrome strings in an array */

function palindromeList()
{
	var list = ["malayalam", "tree", "boat", "civic", "melt", "level"];
	var res=[];
	var listString="";
	var result = true;
	for(i=0;i<=list.length-1;i++)
		{
			listString = list[i];
			alert(listString);
			result = isPalindrome(listString);
			if(result)
			{
			//alert("in loop");
				res.push(listString);
			}
			
		}
	
	document.write("Result Array is : "+res);

}