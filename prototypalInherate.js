// La clásica necesita de funciones constructoras 
// La prototypal se fija solamente en el objeto. La creación de un objeto será el prototipo para todos los demás

//Creamos el objeto persona
var person = new Object();
person.name = 'Criss';
person.getName = function() { return this.name; };
  
function copyObject(objeto){
	function fBridge(){};
 	fBridge.prototype = objeto;
 	return new fBridge;
};
 
var employee = copyObject(person);
alert(employee.getName()); // Criss
