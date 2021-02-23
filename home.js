console.log('hello');

// alert('yooo');

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with JS means changing HTML with JS

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in JS
var num1 = 5.7;
console.log(5 * 10);

// Functions 

function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);
}

var name = prompt('What is your name?');
greeting(name);

// fun();

// How do arguments work in functions?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

var num = 0;

while (num < 100) {
    num += 10;
    console.log(num);
}

for (let num = 0; num <= 100; num += 10) {
    console.log(num);
}
