var arr = [1, 4, 3, 5, 4, 6, 7, 8, 3];
console.log(findSum(8,arr));

function findSum(n,arr){
   arr.sort(function(a, b){return a - b});
   len = arr.length - 1;
   res = [];
   for ( i=0 ; i <= len; i++){
       if(arr[i] + arr[len] == n){
           res.push(arr[i] + ',' + arr[len]);
       }
   } 
   return res;
}