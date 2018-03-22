let dibujo = document.getElementById("dibujo")
let lienzo = dibujo.getContext("2d")
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

dibujarLinea("yellow", 0, 0 , 300, 300)
dibujarLinea("pink", 300, 0, 0, 300)