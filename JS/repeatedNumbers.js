function repeatedNumbers(){
var list = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
var res =[];
var result=0;
for(i=0;i<=list.length-1;i++)
{

    for(j=i+1;j<=list.length-1;j++){
        if(list[i]==list[j])
        {
            res.push(list[i]);
         }
        }
    }
	document.write( "Actual List Is:"+list +"</br>");
	//res.push('10');
	// document.write(res);
	result = removeDuplicates(res);
	
     document.write("Unique numbers in the given List is :"+result);

}

function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
  
    obj[num[x]]=0;
	//document.write("</br> obj[num[x]] =" +obj[num[x]]);
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}