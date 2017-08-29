function factorial(){
var result=1;
var num= document.getElementById("fct").value;
if(num)
{
for(i=1;i<=num;i++){
	result=result*i;
}
document.write(result);
}
else{
alert("Enter valid number");

} 
} 