var factorial = function(){
	var value = document.getElementById("factorial").value;
	var factorial = 1;
	for(var idx=1; idx<=value; idx++) {
		factorial = factorial * idx;
	}
	document.getElementById("getfactorial").innerHTML = factorial;
};
var natural = function(){
	var natural = 0;
	for(var idx=1; idx<=500; idx++) {
		natural = natural + idx;
	}
	document.getElementById("natural").innerHTML = natural;
};
var naturalMultiples = function(){
	var naturalMultiple = 0;
	for(var idx=1; idx<1000; idx++) {
		if(idx % 3 === 0 || idx % 5 === 0) {
			naturalMultiple = naturalMultiple + idx;
		}	
	}
	document.getElementById("naturalMultiple").innerHTML = naturalMultiple;
};
var powerCheck = function(){
	var value = document.getElementById("power").value;
	var power;
	for(var idx=1; idx<=value; idx++) {
		if(Math.pow(2, idx) <= value) {
			power = idx;
		} else {
			break;
		}
	}
	document.getElementById("getpower").innerHTML = power;
};
var multiplesCheck = function(){
	var value = document.getElementById("multiples").value;
	var multiples = [];
	for(var idx=1; idx<=value; idx++) {
		if(idx % 3 === 0){
			multiples.push("Fizz");
		} else if (idx % 5 === 0) {
			multiples.push("Buzz");
		} else {
			multiples.push(idx);
		}
	}
	document.getElementById("getmultiple").innerHTML = multiples.join(" , ");
};
var arrayFunc = function(){
	var array = [1, 4, 3, 5, 4, 6, 7, 8, 3];
	var sum = 8;
	var finalArray = [];
	for(var i = 0; i<= array.length; i++) {
		for(var idx = i+1; idx <= array.length; idx++) {
			if(array[i] + array[idx] === sum) {
				finalArray.push(array[i] + " , " + array[idx]);
			}
		}
	}
	document.getElementById("finalArray").innerHTML = finalArray.join("\r\n");
};
var arrayRepeat = function(){
	var array = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1, 12, 9];
	var finalArray = [];
	for(var i = 0; i<= array.length; i++) {
		for(var idx = i+1; idx <= array.length; idx++) {
			if(array[i] === array[idx] && finalArray.indexOf(array[i]) < 0) {
				finalArray.push(array[i]);
			}
		}
	}
	document.getElementById("finalArrayRepeat").innerHTML = finalArray.join(" , ");
};
var amountPaid = function(){
	var amount = {"Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35};
	var amountPaid = 0;
	for(var idx in amount) {
		amountPaid = amountPaid + amount[idx];
	}
	document.getElementById("amount").innerHTML = amountPaid;
};
var palindromeCheck = function(palindromeValue){
	var value = (palindromeValue)?palindromeValue:document.getElementById("palindrome").value;
	var palindrome = value.split("");
	if(value === palindrome.reverse().join("")) {
		(!palindromeValue)?document.getElementById("getpalindrome").innerHTML = "It is a palindrome":"";
		return true;
	} else {
		(!palindromeValue)?document.getElementById("getpalindrome").innerHTML = "It is not a palindrome":"";
		return false;
	}
	
};
var palindromeArray = function(){
	var finalArray = [];
	var array = ["Malayalam", "tree", "boat", "civic", "melt", "level"];
	for(var idx=0; idx< array.length; idx++) {
		var a = array[idx].toLowerCase();
		if(palindromeCheck(a)) {
			finalArray.push(array[idx]);
		}
	}
	document.getElementById("getpalindromeArray").innerHTML = finalArray.join(" , ");
};