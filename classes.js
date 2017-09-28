// JS is not pure Object Oriented
// But all inside JS is an Object
// We can emulate some parts of the Object Oriented


// We create 2 classes with constructor functions 
	// like molds to create more cars, we use this to add properties and methods

function wheel(model) { // wheel class
	this.modelWheel = model;
}

function car(color, modelCar, country) { // car class
	// Properties
	this.carColor = color;
	this.carModel = modelCar;
	this.carCountry = country;

	// Including other class 
	this.carWheel = new wheel('Firestone');

	// Methods
	this.acelerateCar = function() { alert ('Brummmm'); };

	this.getColor = function() { return this.carColor; };
}

var myCar = new car('red', 'nissan', 'mexico');
var carlosCar = new car('gold', 'kia', 'usa');

alert(myCar.carColor); // red
carlosCar.acelerateCar(); // Brummmm
alert(carlosCar.carWheel.modelWheel); // Firestone
