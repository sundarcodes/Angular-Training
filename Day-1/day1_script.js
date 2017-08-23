var factorial = function() {
    var number = document.getElementById("factorial").value;
    var result = 1;
    if (number == 0) {
        result = 1;
    } else if (number > 0) {
        for (var index = 1; index <= number; index++) {
            result = result * index;
        }
    } else {
        result = "Give proper input";
    }

    document.getElementById("getfactorial").innerHTML = result;
};

var sumNatural = function() {
    var inputNum = document.getElementById("sumNautral").value;
    var result = inputNum * (inputNum / 2 + 1 / 2);
    document.getElementById("sumNaturalOp").innerHTML = result;
};

var multiplr = function() {
    var n = document.getElementById("multipleNautral").value;
    var sum = 0;
    for (var index = 1; index < n; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            sum = sum + index;
        }
    }
    document.getElementById("multipleNautralop").innerHTML = sum;
};

var powCal = function() {
    var Inputvalue = document.getElementById("power2").value;
    var res = 1;
    if (Inputvalue < 1)
        return 0;
    for (var i = 0; i < Inputvalue; i++) {
        var curr = 1 << i;
        if (curr > Inputvalue)
            break;
        res = curr;
    }
    // return res ---> to get value
    document.getElementById("power2op").innerHTML = (i - 1);
};

var multiplr_2 = function() {
    var lastIndex = document.getElementById("Multipler").value;
    var result = [];
    for (var index = 1; index < lastIndex; index++) {
        if (index % 3 == 0) {
            result.push("Fizz");
        } else if (index % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(index);
        }
    }
    document.getElementById("Multipleop").innerHTML = result;
};

var getPairsCount = function() {
    var arr = [1, 4, 3, 5, 4, 6, 7, 8, 3];
    var sum = document.getElementById("sumTofind").value;
    var map = {};
    var result = [];
    var i, temp;
    for (i = 0; i < arr.length; i++) {
        temp = sum - arr[i];
        if (temp >= 0 && map[temp] == 1)
            result.push("(" + arr[i] + "," + temp + ")");
        map[arr[i]] = 1;
    }
    document.getElementById("sumTofindop").innerHTML = result;
};

var getRepeatNumb = function() {
    var arr = [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
    var result = [];
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
            result.push(key);
        }
    }
    document.getElementById("repeatNumberop").innerHTML = result;
};

var getSum = function() {
    var inputObj = {
        "Rick": 85,
        "Amit": 42,
        "George": 53,
        "Tanya": 60,
        "Linda": 35
    };
    var sum = 0;
    for (var key in inputObj) {
        sum += inputObj[key];
    }
    document.getElementById("sumObjop").innerHTML = sum;
};

var checkpalindrome = function() {
    var str = document.getElementById("Inputstr").value;
    str = str.toLowerCase();
    var revStr = str.split('').reverse().join('');
    document.getElementById("outputStr").innerHTML = (str == revStr);
};

var checkpalindromeI = function(str) {
    str = str.toLowerCase();
    var revStr = str.split('').reverse().join('');
    return (str == revStr);
};

var checkArypalindrome = function() {
    var result = [];
    var arr = ["Malayalam", "tree", "boat", "civic", "melt", "level"];
    for (var index = 0; index < arr.length; index++) {
        if (checkpalindromeI(arr[index])) {
            result.push(arr[index]);
        }
    }
    document.getElementById("outputAryStr").innerHTML = result;

};