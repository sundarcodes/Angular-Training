function PrintStr(){
var temp1=0,temp2=0,temp3=0,tot;
for(var i=1;i<=1000;i++){
 if(i%3==0 && i%5!=0){
   temp1= temp1+i;
 }
 else if(i%3!=0 && i%5==0){
   temp2= temp2+i;
 }
 else if(i%3==0 && i%5==0){
   temp3= temp3+i;
 }
 else{
  continue;
  }
}
tot = temp1+temp2+temp3;
document.write("the sum of all the multiples of 3 or 5 below 1000  is"+ tot);	

}