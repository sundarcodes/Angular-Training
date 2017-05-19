console.log(printFizz(1,30));

function printFizz(n,m){
    check35 = (n % 3 == 0 && n % 5 == 0);
    check3 = (n % 3 == 0);
    check5 = (n % 5 == 0);
    return n <= m ? ( check35 ? 'FizzBuzz' : check3 ? 'Fizz' : check5 ? 'Buzz' : n) + ',' + printFizz(n+1,m) : '';
}