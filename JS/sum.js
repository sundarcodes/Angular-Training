function sum(){
var result=0;
var num= document.getElementById("sum").value;
if(num)
{
for(i=1;i<=num;i++){
	result=result+i;
}
document.write(result);
}
else{
alert("Enter valid number");

} 
} 