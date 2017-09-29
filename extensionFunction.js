// One function that facilite the extension 
function extension(subClass, superClass) {
	subClass.prototype = new superClass;
	subClass.prototype.constructor = subClass;
} // a lot of memory

// Other solution is the bridge function
// In which we assign to its property prototype the prototype of the superclass:
function extension(subClass, superClass) {
	function bridgeF(){};

	bridgeF.prototype = superClass.prototype;
	subClass.prototype = new bridgeF();
	subClass.prototype.constructor = new subClass;
}