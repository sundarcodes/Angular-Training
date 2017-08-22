/**
 * 1) Find the factorial of a given number. If the given number is 5, factorial is computed as 5*4*3*2*1 which equates to 120. Please write a program which would find the factorial for any number.
Input: 5
Output: 120
 */
var factorial = function(n) {
    if (n == 0) {
        return 1
    } else if (n > 0) {
        return n * factorial(n - 1);
    } else {
        return "Give proper input";
    }
};
var number = factorial(5);
console.log(number);

/**
 * 2) If we list all the natural numbers till 10 i.e. 1 to 10, the sum of these numbers is 55. Find the sum of the first 500 natural numbers.
Input: 10
Output: 45
 */

var sumNatural = function(n) {
    console.log(n * (n + 1) / 2);
};
//sumNatural(10);

/**
 * 3) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
Input: 10
Output: 23
 */
var multiplr = function(n) {
    var sum = 0;
    for (var index = 1; index < n; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            sum = sum + index;
        }

    }
    console.log(sum);
};

multiplr(1000);
/**
  * 4) Given a number, find the closest power of 2 which is less than or equal to the number. If the number is 36, your answer should be 5 as 32 (2^5) is the closest power less than 36.
Input: 36
Output: 5
  */

var powCal = function(n) {
    // Invalid input
    var res = 1;
    if (n < 1)
        return 0;
    for (var i = 0; i < (n); i++) {
        var curr = 1 << i;
        if (curr > n)
            break;
        res = curr;
    }
    // return res ---> to get value
    return i - 1;
};

console.log(powCal(18));

/**
 * 5) Write a program that prints the numbers from 1 to N. But,  for multiples of three,  print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
Input: N = 17
Output:
1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17
 */
var multiplr_2 = function(n) {
    var sum = 0;
    for (var index = 1; index < n; index++) {
        if (index % 3 == 0) {
            console.log("Fizz");
        } else if (index % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(index);
        }
    }
};

multiplr_2(17);

/**
 * 6) Find all pairs in array of integers whose sum is equal to given number.
Input: sum = 8
[1, 4, 3, 5, 4, 6, 7, 8, 3]
Output:
"1, 7"
"4, 4"
"3, 5"
"5, 3"
 */

var getPairsCount = function(arr, sum) {
    var map = {};
    var i, temp;
    for (i = 0; i < arr.length; i++) {
        temp = sum - arr[i];
        if (temp >= 0 && map[temp] == 1)
            console.log(arr[i], temp);
        map[arr[i]] = 1;
    }
};

var ary = [1, 4, 3, 5, 4, 6, 7, 8, 3];
getPairsCount(ary, 8);

/**
 * 7) Given an array print all the numbers that are repeating in it.
Input: [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1]
Output:
"1"
"2"
"5"
"8"
"4"
Note: The final order of output need not be the same as above.
 */
var getRepeatNumb = function(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]] = (map[arr[i]]) + 1;
        } else {
            map[arr[i]] = 1;
        }
    }
    for (var key in map) {
        if (key in map && (map[key]) > 1) {
            console.log(key);
        }
    }
};
var input_1 = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
getRepeatNumb(input_1);

/*
8)  Given an object, containing names as keys and amount_paid by each of them as
values, write a function that takes such an object as input and calculates the total sum paid by them together.
Input: {"Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35}
Output: 275
*/
var getSum = function(obj) {
    var sum = 0;
    for (var key in obj) {
        sum += obj[key];
    }
    return sum;
};
var inputObj = { "Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35 };

console.log(getSum(inputObj));

/**
 * 9) Write a function to check whether a given string is a palindrome or not.
Input: "Mom"
Output: true
Input: "sister"
Output: false
**/
var checkpalindrome = function(str) {
    str = str.toLowerCase();
    var revStr = str.split('').reverse().join('');
    return (str == revStr);
};
console.log(checkpalindrome('MOM'));

/**
 * 10) Write a function that takes an array of words and returns an array containing
only of palindromes.
Note: Use the above function to check if a word is a palindrome.
Input: ["Malayalam", "tree", "boat", "civic", "melt", "level"]
Output: ["Malayalam", "civic", "level"]**/

var checkArypalindrome = function(arr) {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        if (checkpalindrome(arr[index])) {
            result.push(arr[index]);
        }
    }
    return result;
};
var inputArr = ["Malayalam", "tree", "boat", "civic", "melt", "level"];
var output = checkArypalindrome(inputArr);
console.log(output);