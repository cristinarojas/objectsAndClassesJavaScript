/* 3 Ways of declaring Objects in JS */

var myFirstObject = new Object(); // with new Object()

var mySecondObject = {}; // Initializing to {}

function constructorObject() {}; // Constructor function or class builder
/* 
	Con esta forma creamos una función que nos servirá
	en el futuro para que un objeto se instancie a partir de esta ,es decir,
	necesitaremos la palabra clave new 
	para crear el objeto basado en esta función. 
*/

// Example: 

// Instanciamos y creamos el objeto car
function car(model, color, gas) {
	this.model = model;
	this.color = color;
}

// Referenciado a myCar
var myCar = new car('nissan', 'red');

console.log('myCar', myCar);