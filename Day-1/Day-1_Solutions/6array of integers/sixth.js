function findPairs(){
var array = [1, 4, 3, 5, 4, 6, 7, 8, 3];
var sum=0,i,temp=0;
sum= document.getElementById("sum").value;
for(i=0;i<array.length;i++){
	for(y=i+1;y<array.length;y++){
		if(array[i]+array[y]== sum){
			document.write(array[i]+"  "+array[y]+"<br>");
			temp++;
			
		}
		
		
	}
	
}
if(temp==0)
document.write("no such value as"+ sum);

}
