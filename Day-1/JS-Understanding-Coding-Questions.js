
//Question: What is the value of foo?
var foo = 10 + '20';

//Question: What is the value of foo?
var foo = 10 + 30 + '20';

var foo = 10*20+30;

//Question: What value is returned from the following statement?
"i'm a lasagna hog".split("").reverse().join("");

//Question: What is the value of window.foo?
( window.foo || ( window.foo = "bar" ) );

//Question: What is the outcome of the two alerts below?
  var foo = "Hello";
  (function() {
  var bar = " World";
  alert(foo + bar);
  })();
  alert(foo + bar);


//Question: What is the value of foo.length?
var foo = [];
foo.push(1);
foo.push(2);

//Question: What is the value of foo.x?
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

//Question: What does the following code print?
console.log('one');
setTimeout(function() {
	console.log('two');
},0);
console.log('three');
console.log('three1');
console.log('three2');
console.log('three3');


//Question: What does the following code print ?

greet();

function greet(){
	console.log('Hello Gurdeep');
}

//Question: What does the following code print ?

nameLessFunction();

var nameLessFunction = function(){
	console.log('Hello');
}


//And this one is the question that I would like you guys to think over and code : 
//Question: How would you make this work? Write a add function which would work for both the below cases. 
add(2, 5); // 7
add(2)(5); // 7


// Explain the below code with relation to Execution Context and Event Queue
// Assume you are the JS engine and tell us how this code will be handled.
function a(){
  var x = 1;
  setTimeout(function(){
    console.log(x);
  },0);
  x = 2;
}
a();
x = 3;


// What are the output of the following and what JS concept it works on ?
// Code Snippet # 1
function a(){
  var x = 1;
  return function(){
    console.log(x);
  };
}
b = a();
b();

// Code Snippet # 2
function a(){
  var x = 1;
  (function(){
    console.log(x);
  }());
}
a();

// Code Snippet # 3
function a(){
  var x = 1;
  b = function(){
    console.log(x);
  };
  b();
}
a();

// Code Snippet # 4
function a(){
  var x = 1;
  b = function(){
    console.log(x);
  };
}
a();
b();

// Code Snippet # 5
function a(){
  var x = 1;
  var b = function(){
    console.log(x);
  };
}
a();
b();

// What is the output and why ?

var Person = function(name,age){
  this.name = name;
  this.age = age;
  return;
}

var person1 = new Person();
console.log(person1);

// Classical vs Prototypal Inheritance
// Convert this to prototypal inheritance

class LivingBeing {
  constructor(type){
    this.type = type;
  }
  whoAmI(){
    console.log('I am a ' + this.type);
  }
}

class Human extends LivingBeing {
  constructor(name){
    super('Human');
    this.name = name;
  }
}

var person = new Human('Sundar');
person.whoAmI();

// Prototypal inheritance
function LivingBeing1(type){
    this.type = type;
}
LivingBeing1.prototype.whoAmI = function() {
    console.log('I am a ' + this.type);
}

function Human1(name) {
 LivingBeing1.call(this, 'Human');
}
Human1.prototype.whoAmI = LivingBeing1.prototype.whoAmI;

var person1 = new Human1('Sundar');
person1.whoAmI();


// Implement array.map, array.filter and array.reduce