function multiplesFizBuz(){
var sum;
var no=Number(document.getElementById("numMul").value);
for (var x=1; x <= no; x++){
    if( x % 3 && x % 5 ) {
        console.log(x);
    } else {
        if( x % 3 == 0 ) {
            console.log("buzz");
        }
        if( x % 5 == 0 ) {
           console.log("fizz");
        }
    }
    
}
}