
function sumofInt(){
	//sum of first 500 natural numbers
	var no=Number(document.getElementById("num").value);
var  num, sum = 0;
 
    for (num = 1; num < no; num++)
    {
        sum = sum + num;
    }
	document.getElementById("fact").value= sum;
    console.log("Sum = %4d\n", sum);
}
