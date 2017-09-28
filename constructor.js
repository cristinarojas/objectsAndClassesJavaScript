/* Todo objeto tiene una propiedad intrínseca llamada constructor 
que hace referencia a la función constructora que inicializa el objeto */

function car(color, model) {
	//...
}

var myCar = new car('red', 'nissan');

alert(myCar.constructor);// function car(color, model) {}
alert(myCar.constructor === car); // true


var myObject = new Object();
alert(myObject.constructor); // function Object([native code])