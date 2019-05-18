
var counter = function(arr){
	return "There are " + arr.length + " element in this array";
};

var adder = function(a,b){
	return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;

var message =  "C'est un message qui marche!";

module.exports = {
	message: message,
	counter: counter,
	adder: adder,
	pi: pi
};



