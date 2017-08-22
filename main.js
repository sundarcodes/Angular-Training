
function factorial(number) {
    if (number === 0) {
      return 1;
    }
     return number * factorial(number - 1);
  }

  function sumofNaturalNum(){
      /* sn = n(n+1)/2*/
      //getting factorial number
      
      console.log('Factorial for the given number is '+factorial(document.getElementById("naturalNumber").value));

      //calculating sum of natural number
      var input  = document.getElementById("naturalNumber").value;
      var sum = Number(input)*(Number(input)+1)/2;
      console.log('Sum of the given natural number is '+sum);
       getMultipleSum();
       powerofTwo();
       fizzBuzz();
       palindrome();

  }

  function getMultipleSum(){
    var input  = document.getElementById("naturalNumber").value;
    var sum = 0;
    for(var i =0;i<Number(input);i++) {
        if(i%3==0 || i%5==0){
            sum = sum+i;
        }
    }
    console.log('sum of all the multiples of 3 or 5 for the number is '+sum);
  }

  function powerofTwo(){
    var res = 0;
    var input  = document.getElementById("naturalNumber").value;
    for (var i=Number(input); i>=1; i--)
    {
       
        if ((i & (i-1)) == 0)
        {
            res = i;
            break;
        }
    }
    console.log('closest power of 2 which is less than or equal to the number is '+res );
  }

  function fizzBuzz(){
    var inputVal  = document.getElementById("naturalNumber").value;
    var str="";
    for (var i=1;i<=Number(inputVal);i++)
    {
        if(i%3==0)
        {
            str+=",fizz"
        }
        if (i%5==0)
        {
            str+=",buzz"
        }
        if (!(i%3==0||i%5==0))
        {
            str+=','+i;
        }
        
    }
    console.log(str);
  }

  function palindrome(){
    var inputVal  = "sister";//document.getElementById("naturalNumber").value;
    var stringArr = String(inputVal).split("");
    stringArr.reverse();
    var reverseStr="";
    for(var i = 0;i<stringArr.length;i++){
        reverseStr = reverseStr+stringArr[i];
    }
    if(reverseStr.toUpperCase() === inputVal.toUpperCase()){
        console.log('Given string is palindrome '+ reverseStr);
    }else{
        console.log('Given string not a palindrome '+ reverseStr);
    }
  }
  