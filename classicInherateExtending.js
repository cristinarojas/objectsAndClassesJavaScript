// person Constructor function
function person(name) {
	this.name = name;
}

// Methods 
person.prototype.getName = function() { return this.name; };
person.prototype.breathe = function() { return 'Im...respirando'; };

// employee Constructor function
function employee(job, company, name){
	person.call(this, name); // we call the person constructor and assign the same property
	this.job = job;
	this.company = company;
}

// We extend the properties and methods of person to employee / inherit
// employee.prototype = new person();
// console.log('employee.prototype', employee.prototype);
/* person {name: undefined}
constructor: ƒ employee(job, company, name)
getCompany: ƒ ()
name: undefined
__proto__: Object
*/

// We assign the constructor to the subclass
// employee.prototype.constructor = employee;
// console.log('employee.prototype.constructor', employee.prototype.constructor); 
/* ƒ employee(job, company, name){
	person.call(this, name); // we call the person constructor and assign the same property
	this.job = job;
	this.company = company;
}*/

extension(employee, person);

// Before we did the inherate we add the method to know the company
employee.prototype.getCompany = function() {return this.company; };

var criss = new person('Cristina Rojas');
var crissEmployee = new employee('Front End','Codejobs','Cristina Rojas');
 
alert(criss.getName()); // Cristina Rojas
alert(crissEmployee.getName()); // Cristina Rojas
alert(crissEmployee.getCompany()); // Codejobs
alert(crissEmployee.breathe()); // Im...respirando (método de la superclase Persona)

alert(crissEmployee instanceof person); // true
alert(crissEmployee instanceof employee); // true


// To facilite the extension
function extension(subClass, superClass) {
	function bridgeF(){};

	bridgeF.prototype = superClass.prototype;
	subClass.prototype = new bridgeF();
	subClass.prototype.constructor = new subClass;
}