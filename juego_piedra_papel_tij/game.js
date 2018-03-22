let Jugador = {
	nombre: null,
	vidas: 3,
	jugada: null,
	restarVida: function restarVida() {
		this.vidas -= 1
	},
	jugadaRandom: function jugadaRandom() {
		this.jugada = Math.round(((Math.random() * (3 - 1)) + 1))
	}
}

let jugador1 = Object.create(Jugador)
jugador1.nombre = "Jugador1"

let com = Object.create(Jugador)
com.nombre = "Com"

//console.log(jugador1)
//console.log(jugador1.jugada)
//console.log(jugador1.jugadaRandom())
//console.log(jugador1.jugada)
//console.log(com)

while(jugador1.vidas && com.vidas) {
	
	jugador1.jugada = prompt("Este es el juego de piedra papel o tijera, elige 1- Piedra, 2.- Papel, 3. Tijera, 4.-Al Azar, 5.-Salir", 4)
	//console.log(jugador1.jugada)
	
	if (jugador1.jugada == 4) {
		jugador1.jugadaRandom()
		//console.log(jugador1.jugada)
	}

	if (jugador1.jugada == 5) {
		alert("GAME OVER")
		break
	}

	com.jugadaRandom()
	//alert(`Elegiste ${jugador1.jugada} y la COM ${com.jugada}`)

	//JUGADOR PIEDRA
	if(jugador1.jugada == 1 && com.jugada ==1)
		alert(`Elegiste piedra y la COM piedra: ¡Empate!`)

	if(jugador1.jugada == 1 && com.jugada ==2) {
		alert(`Elegiste piedra y la COM papel: ¡pierdes 1 vida!`)
		jugador1.restarVida();
		alert(`Marcador juagador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	if(jugador1.jugada == 1 && com.jugada ==3) {
		alert(`Elegiste piedra y la COM tijera: ¡COM pierde 1 vida!`)
		com.restarVida();
		alert(`Marcador juagador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	//JUGADOR PAPEL
	if(jugador1.jugada == 2 && com.jugada ==1) {
		alert(`Elegiste papel y la COM piedra: ¡COM pierde 1 vida!`)
		com.restarVida();
		alert(`Marcador juagador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	if(jugador1.jugada == 2 && com.jugada ==2)
		alert(`Elegiste papel y la COM papel: ¡Empate!`)

	if(jugador1.jugada == 2 && com.jugada ==3) {
		alert(`Elegiste papel y la COM tijera: ¡pierdes 1 vida!`)
		juagador1.restarVida();
		alert(`Marcador juagador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	//JUGADOR TIJERA
	if(jugador1.jugada == 3 && com.jugada == 1) {
		alert(`Elegiste tijera y la COM piedra: ¡pierdes 1 vida!`)
		jugador1.restarVida();
		alert(`Marcador juagador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	if(jugador1.jugada == 3 && com.jugada == 2) {
		alert(`Elegiste tijera y la COM papel: ¡COM pierde 1 vida!`)
		com.restarVida();
		alert(`Marcador jugador1: ${jugador1.vidas} vida/s, COM: ${com.vidas} vida/s `)
	}

	if(jugador1.jugada == 3 && com.jugada == 3)
		alert(`Elegiste tijera y la COM tijera: ¡Empate!`)
}


if (jugador1.vidas) 
	alert("GANASTE")
else 
	alert("PERDISTE")
