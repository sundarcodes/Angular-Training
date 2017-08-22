var obj = {"Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35};
var sum = 0;
for(var key in obj){
  sum += parseInt(obj[key]); 
}
alert("the sum of all values in object:"+ sum);