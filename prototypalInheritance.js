// Objects can create new objects
// can inherit from one another

// When we create a constructor function (class) Js create a prototype object
// When we careate an object in JS we inherit/extend the properties of its prototype

function F() {} // here is created a property F.prototype (that also is an object)
// that is linked with the generic object Object.prototype

// If we add new methods or properties to F.prototype each others objects created
// from F() inherated the new functionalities.

function person(name) {
	this.name = name;
}

var ObjectCriss = new person('Criss');

alert(person.constructor); // function 
alert(person.prototype); // object, prototype of the constructor function
alert(person.prototype.constructor); // function person(name) {this.name = name;}

alert(ObjectCriss.constructor); // function person(name) {this.name = name;}
alert(ObjectCriss.constructor.prototype); // object is same like person.prototype
alert(ObjectCriss.prototype); // undefined, prototype of ObjectCriss do not exist
alert(ObjectCriss.name.constructor); // String tipo string el nombre de la propiedad
alert(ObjectCriss.prototype.constructor); // function person()

alert(person.prototype.constructor === person); // true

// THEN
alert(ObjectCriss.constructor === person); // function person(name) {this.name = name;} === person TRUE




















