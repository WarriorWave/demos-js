/*
*************  *********************  REQUEST WITH CALLBACKS ***********************************************
// function to receive data across http
function get(URL, callback) { 
  const xhr = new XMLHttpRequest();
  // this function is sxecute when the state change
  xhr.onreadystatechange = function() {
    const DONE = 4
    const OK = 200
    if(this.readyState == DONE) {
      if(this.status == OK) {
        // OK response
        callback(null, JSON.parse(this.responseText))
      }
    }
    else {
      // error
      callback(new Error(`Se ha producido un error con el código ${this.status}`))
    }
  }
  xhr.open('GET', URL) //open url
  xhr.send(null) // send null
}

// handle error function
const handleError = (err) => console.log(`Request failed ${err}`)

// call to get nest functions 
get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
  if(err) return handleError

  get(luke.homeworld, function onResponse(err, homeworld) {
	  if(err) return handleError
	  console.log('Request succeded')
	  console.log('luke', luke)
	  console.log('homewolrd', homeworld)
	  document.write(`${luke.name} nació en ${homeworld.name}`)
  })
})

*/

// **************************************** REQUEST WITH PROMISES ************************************

function get(URL){
	//New Promise recibe una funcion
	return new Promise((resolve, reject)=>{
		const xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if(this.status === OK){
					//Todo OK
					resolve(JSON.parse(this.responseText))
				}else {
					//Hubo un error
					reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
				}
			} 
		}

		xhr.open('GET', URL);
		xhr.send(null);
	})
}

/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`) 
}

let article

/*llamada al metodo */
get('https://vpet-api.herokuapp.com/blog/articles/6/')
	//lamada a funcion normal
	.then(function(response){
		article = response
		//promesa
		console.log(article)
		return get(article.author)
	})
	//llamada a funcion con arrow functions
	.then((author) => {
		article.author = author
		document.write(`El articulo "${article.title}" fue escrito por "${article.author.name}"`)
	})
	.catch((err)=> handleError(err))
