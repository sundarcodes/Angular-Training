function factorial(n) {
    var i, sum = 1 ;
    for (i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}

function fact(n) {
    return n == 1 ? 1 : n * fact(n - 1)
}
console.log(fact(5));

