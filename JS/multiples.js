function multiples(){
var result=0;
var num= document.getElementById("sum").value;
if(num)
{

for(i=1;i<=num;i++)
{
if(i%3==0 && i%5==0)
{
document.write('FizzBuzz,');

}
else if(i%3==0)
{
document.write('Fizz,');
}
else if(i%5==0)
{
document.write('Buzz,');
}
else{
if(i==num)
{
document.write(i);
}
else{
document.write(i+",");
}
}
}
}
else{
alert("Enter valid number");

} 
} 