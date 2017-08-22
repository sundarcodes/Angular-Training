/*function getRepeatedVal(){
	var array = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
	var repeatedVal =[];
	for(var i=0;i<array.length;i++){
		
		    console.log(array.lastIndexOf(array[i]));
			console.log(repeatedVal.indexOf(array[i]));
			if((array.lastIndexOf(array[i]!=i))&& (repeatedVal.indexOf(array[i]=== -1))){
				repeatedVal.push(array[i]);
				
			}
		}
		
	
	//console.log(repeatedVal);
}*/

var numbers = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
var duplicates = [];

function goThroughArray(arr) {
    for(var i = 0;i < arr.length; i++) {
        if((arr.lastIndexOf(arr[i]) != i) &&
           (duplicates.indexOf(arr[i]) == -1)) {
            duplicates += arr[i];
        }
    }
    return duplicates;
}

alert(goThroughArray(numbers));

