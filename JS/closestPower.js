function closestPower(){
var result=0;
var num= document.getElementById("sum").value;
if(num)
{
document.write("Closest Power of 2 below "+ num +" is : ");


 result = Math.pow( 2, Math.floor( Math.log( num ) / Math.log( 2 ) ) );

document.write(result);
}
else{
alert("Enter valid number");

} 
} 