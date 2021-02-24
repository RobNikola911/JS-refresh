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

/*
var name = prompt('What is your name?');
greeting(name);

*/

// fun();

// How do arguments work in functions?

/*
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

var num = 0;

while (num < 50) {
    num += 10;
    console.log(num);
}

for (let num = 0; num <= 50; num += 10) {
    console.log(num);
}
*/

// Data types

let yourAge = 18;
let yourName = 'Rob';
let name = {first: 'John', last: 'Doe'};
let truth = false; 
let groceries = ['apple', 'banana', 'oranges'];
let random;             // undefined
let nothing = null;     // value null

// Strings in JS (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(fruit.length);

// Array 

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

// Array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' ? '));
console.log(fruits.pop(), fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);

let someNumbers = [3, 6, 2, 8, 23, 565, 2, 324, 12];
console.log(someNumbers.sort(function(a, b) {return b-a}));
console.log(someNumbers.sort(function(a, b) {return a-b}));


// Objects in JS

let student = {
    first: 'Balogh', 
    last: 'Pete', 
    age: 25, 
    height: 178,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

/* console.log(student.first);
console.log(student.last);
student.first = 'notBalogh';  // change value
console.log(student.first); */
student.age++;
console.log(student.studentInfo());

// Conditionals, Control flows (if else)

var age = prompt('What is your age?');

if ((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch statements

