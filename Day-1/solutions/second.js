console.log(getSum(500));
function getSum(n) {
   return n == 1 ? 1 : n + getSum(n-1);
}