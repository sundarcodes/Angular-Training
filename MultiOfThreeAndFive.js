function MultipleOfInt(){
//Find the sum of all the multiples of 3 or 5 below 1000.	
var no=Number(document.getElementById("numMul").value);
var sum = 0;
for (var i = 0; i < no; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
document.getElementById("mulSet").value= sum;
console.log('Sum: %d', sum);
}