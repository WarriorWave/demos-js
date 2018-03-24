let dibujo = document.getElementById('dibujo')
let lienzo = dibujo.getContext('2d')
let miBoton = document.getElementById('boton')
let lineas = document.getElementById('texto_lineas')

miBoton.addEventListener('click', dibujar) 

let xi = 0, yi = 0
let xf = 0, yf = 0

console.log(dibujo)
console.log(lienzo)

const dibujarLinea = (color, xi, yi, xf, yf) => {
	
	lienzo.beginPath();
	lienzo.strokeStyle = color
	lienzo.moveTo(xi, yi)
	lienzo.lineTo(xf, yf)
	lienzo.stroke()
	lienzo.closePath()
}

function dibujar(ev ,linea = lineas.value) {
	console.log(ev)
	console.log("lineas a dibujar: " + linea)
	linea = parseInt(linea)
	console.log(linea)
	for (let i = 0; i < linea; i++) {
		dibujarLinea("#AAF", xi, yi += (Math.round(300 / linea)) , xf += (Math.round(300 / linea)), 300)	
	}
}
