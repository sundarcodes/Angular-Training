function totalSumPaid(){
var list = {"Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35}
//var res =[];
var result=0;
//res = (Object.values(list));
//document.write("Values of the list is : "+res +"</br>");
for (let key of Object.keys(list)) {  
 
  result=result+list[key];
            
}
   
document.write("Amount paid altogether is: " +result);
}

