function sumOfMultiples(){
var result=0;
var num= document.getElementById("sum").value;
if(num)
{
document.write("Multiples of 3 or 5 below "+ num +" is :</br>");
for(i=1;i<num;i++){

if(i%3==0 || i%5==0)
{

result=result+i;
document.write(i+" ");
}
}
document.write("</br> Sum of all the multiples of 3 below " + num+ " is : " +result);
}
else{
alert("Enter valid number");

} 
} 