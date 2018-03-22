/****************	POINTS WITH OBJECTS -----------------------------------------------------------------------------
const p1 = {
	x: 0,
	y: 4,
	//methos
	moverEnX(x) {
		this.x += x;
	},
	moverEnY(y) {
		this.y += y;
	}
}

const p2 = {
	x: 3,
	y: 0,
	//methods
	moverEnX(x) {
		this.x += x;
	},
	moverEnY(y) {
		this.y += y;
	}
}
*/

/************	POINTS WITH PROTOTYPES ----------------------------------------------------------------------------------
function Point(x, y) {
	this.x = x;
	this.y = y;
}

//prototype methods
Point.prototype.moverEnX = function(x){
	this.x += x; 
}

Point.prototype.moverEnY = function(y){
	this.y += y;
}

Point.prototype.distance = function(p){
	let x = this.x - p.x;
	let y = this.y - p.y;

	return Math.sqrt(x*x + y*y);	
}

p1 = new Point(0, 3);
p2 = new Point(4, 0);

console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p1)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p1.distance(p2)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p2)}`);
*/

/*****************	POINTS WITH OBJECT CREATE ---------------------------------------------------------------------------

const Punto = {
	init: function init(x, y) {
		this.x = x;
		this.y = y;
	},
	moverEnX: function moverEnX(x) {
		this.x += x; 
	},
	moverEnY: function moverEnY(y) {
		this.y += y; 
	},
	distance: function distance(p) {
		let x = this.x - p.x;
		let y = this.y - p.y;

		return Math.sqrt(x*x + y*y);	
	}
}

p1 = Object.create(Punto);
p1.init(0, 4);
p2 = Object.create(Punto);
p2.init(3, 0);


console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p1)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p1.distance(p2)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p2)}`);

p1.__proto__.distance = function() {alert("Hola")}

p2.distance(100);
*/

//***************** POINTS WITH EMCS6 ---------------------------------------------------------------------------------

class Punto {
	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	moverEnX(x) {
		this.x += x; 
	}
	
	moverEnY(y) {
		this.y += y; 
	}

	distance(p) {
		let x = this.x - p.x;
		let y = this.y - p.y;

		return Math.sqrt(x*x + y*y);	
	}
}

p1 = new Punto(0, 3);
p2 = new Punto(4, 0);

console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p1)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p1.distance(p2)}`);
console.log(`La distancia entre el punto (${p1.x}, ${p1.y}) y el punto (${p2.x}, ${p2.y}) es ${p2.distance(p2)}`);

// class is like prototype
p1.__proto__.distance = function() {alert("Hola")}

p2.distance(100);