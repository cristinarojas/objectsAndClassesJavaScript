/* WAY 1 TO CREATE AN OBJECT IN JS */
// with new Object()
var myFirstObject = new Object(); 
myFirstObject.color = 'red';

console.log('myFirstObject', myFirstObject);



/* WAY 2 TO CREATE AN OBJECT IN JS */
// Initializing to {}
var mySecondObject = {}; 
mySecondObject.color = 'blue';

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

// Instanciamos y creamos el objeto car
function car(model, color, gas) {
	this.model = model;
	this.color = color;
}

// Referenciado a myCar
var myCar = new car('nissan', 'red');

console.log('myCar', myCar);

/* 
	El objeto myCar ahora contiene 
	la función 'car' dentro su propiedad llamada constructor
*/


























