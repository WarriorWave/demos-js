/* ------------     Funtions    -----------------------*/
const dibujarLinea = (color, xi, yi, xf, yf) => {
	
	lienzo.beginPath();
	lienzo.strokeStyle = color
	lienzo.lineWidth = 3
	lienzo.moveTo(xi, yi)
	lienzo.lineTo(xf, yf)
	lienzo.stroke()
	lienzo.closePath()
}

function dibujarTeclado (ev) {
	//console.log(ev.keyCode)

	switch (ev.keyCode) {
		case teclas.LEFT:
			console.log('Izquierda')
			dibujarLinea(color, xi - mov, yi, xf, yf)
			xi -= mov
			break;
		case teclas.UP:
			console.log('Arriba')
			dibujarLinea(color, xi, yi, xf, yf + mov)
			yf += mov
			break;
		case teclas.RIGHT:
			console.log('Derecha')
			dibujarLinea(color, xi + mov, yi, xf, yf)
			xi += mov
			break;
		case teclas.DOWN:
			dibujarLinea(color, xi, yi, xf, yf - mov)
			yf -= mov
			console.log('Abajo')
			break;			
		default:
			console.log('Otra tecla')
			break;
	}
}


/*----------------- Vars --------------------*/
let teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
}
let canvas = document.getElementById('canvas')
let lienzo = canvas.getContext('2d')
let color = 'blue'
let mov = 10
let xi = 249, yi = 249, xf = 251, yf = 251

// The document contains a keydown(push) event or keyup(pull)
document.addEventListener('keyup', dibujarTeclado)
dibujarLinea('red', xi, yi, xf, yf)


