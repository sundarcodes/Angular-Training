function PrintStr(){
	
var num =1;
num = document.getElementById("last").value;
console.log(num);
for(i=1;i<=num;i++){
 if(i%3==0&&i%5!=0){
  document.write("Fizz,");
  }
  else if(i%5==0&&i%3!=0){
  document.write("Buzz,");
  }
  else if(i%5==0&&i%3!=0){
  document.write("FizzBuzz,");
  }
  else{
  document.write(i+",");
  }

}
}