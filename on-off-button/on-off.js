class Toggable {
	
	constructor(el){
		this.el = el
		this.el.innerHTML = 'OFF'
		// this element is lisenning click event when it apear when call onClick class method
		// this is and nest element  receive window contex by default but bind indicate that receive cless context
		this.el.addEventListener('click', this.onClick.bind(this))
		this.state = false
	}

	onClick(ev) {
		// On click receibe event as parameter that can be a mouse over etc...
		console.log(ev)
		this.state = !this.state
		this.toggleText()  // call class method
	}

	toggleText() {
		this.el.innerHTML = this.state ? 'ON' : 'OFF'
		console.log(this)

	}

}

// DOM Selector to select #button element
const boton = document.getElementById('button')
// my buston is an instance of Toggable, which receive boton as parameter
const mybutton = new Toggable(boton)

