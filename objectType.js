// To know the object type
var myObjectOne = new Object(); // Object

var myObjectTwo = {}; // Object

function myObjectThree(color, model){}; // function

function car(color, model) {}; // function

var myCar = new car('red', 'nissan'); // object

console.log(typeof myObjectOne); // Object
console.log(typeof myObjectTwo); // Object
console.log(typeof myObjectThree); // Function
console.log(typeof car); // Function
console.log(typeof myCar); // Object

console.log(myObjectOne.constructor === Object); // true
console.log(myObjectTwo.constructor === Object); // true
console.log(myObjectThree.constructor === Function); // true
console.log(car.constructor === Function); // true
console.log(myCar.constructor === Object); // false

// To know the instance 
console.log(myCar instanceof car); // true
console.log(myCar instanceof Object) // true







