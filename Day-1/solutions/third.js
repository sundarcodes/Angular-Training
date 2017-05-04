console.log(getMulSum(10));

function getMulSum(n){
        check = ( n % 3 == 0 || n % 5 == 0);
        return n > 0 ? check ? n + getMulSum(n-1) : 0 + getMulSum(n-1) : 0;
        
}