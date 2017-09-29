// In Js each we instantiate and object, a literal copy is made in memory of a whole object
// Memory is expense - as myCar and carlosCar are in memory with the same properties and methods
var myCar = new car('red', 'nissan', 'mexico');
var carlosCar = new car('gold', 'kia', 'usa');

// We can extract the commun methods and insert under the prototype property
// this will save memory 

function car(color, modelCar, country) { // car class
	// Properties
	this.carColor = color;
	this.carModel = modelCar;
	this.carCountry = country;
	// Including other class 
	this.carWheel = new wheel('Firestone');
}

// We extend the methods of the super classe like this
// Methods
car.prototype.acelerateCar = function() { alert ('Brummmm'); };
car.prototype.getColor = function() { return this.carColor; };