/* WAY 1 TO CREATE AN OBJECT IN JS */
// with new Object()
var myFirstObject = new Object(); 

myFirstObject.color = 'red'; // Insert property way 1
myFirstObject['wheels'] = 4; // Insert property way 2

console.log('myFirstObject', myFirstObject);

delete  myFirstObject.wheels

console.log('myFirstObject', myFirstObject);



/* WAY 2 TO CREATE AN OBJECT IN JS */
// Initializing to {}

// Properties INSIDE
var mySecondObject = {
	model: 'nissan' // Inside with :
}; 

mySecondObject.color = 'red'; // Insert property way 1
mySecondObject['wheels'] = 4; // Insert property way 2

console.log('mySecondObject', mySecondObject);

delete  mySecondObject.wheels

console.log('mySecondObject', mySecondObject);

// Properties OUTSIDE
var mySecondObject = {};
								// Outside with = 
mySecondObject.color = 'blue'; // Insert property way 1
mySecondObject['wheels'] = 4;  // Insert property way 2

console.log('mySecondObject', mySecondObject);

delete  mySecondObject.wheels

console.log('mySecondObject', mySecondObject);



/* WAY 3 TO CREATE AN OBJECT IN JS */
function constructorObject() {}; // Constructor function or class builder
/* 
	Con esta forma creamos una función que nos servirá
	en el futuro para que un objeto se instancie a partir de esta ,es decir,
	necesitaremos la palabra clave new 
	para crear el objeto basado en esta función. 
*/

// EXAMPLE

// Object with Constructor function
function car(model, color) {
	this.model = model;
	this.color = color;
}

var myCar = new car('nissan', 'red');

console.log('myCar', myCar);


// Object with constructor function and adding other property with .prototype
function car(model, color) {
	this.model = model;
	this.color = color;
}

car.prototype.wheels = null;

console.log('car', car);

// Referenciado a myCar
var myCar = new car('nissan', 'red');
myCar.wheels = 4;

console.log('myCar', myCar);

delete  myCar.wheels

console.log('myCar', myCar);


/* 
	El objeto myCar ahora contiene 
	la función 'car' dentro su propiedad llamada constructor
*/
























