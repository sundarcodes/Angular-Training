function listOfPairs(){
var sum = document.getElementById("sum").value;
var list = [1, 4, 3, 5, 4, 6, 7, 8, 3];
if(sum)
{
document.write("Pairs whoose sum equal to 8 in the given List is : </br>");
for(i=0;i<=list.length-1;i++)
{ 
    for(j=i+1;j<=list.length-1;j++){
        if(list[i]+list[j]==sum)
        {
            document.write("\"" +list[i]+","+list[j]+ "\""+ "</br>")
        }
    }

}
}
else{
alert("Enter valid number");

} 
}