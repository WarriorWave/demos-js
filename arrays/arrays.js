// sum with arrays as params with ...param sintaxis
// indicate that the param is an array
function suma(...numeros) {
	// return reduce array method with acum as last value, numero as current value
	return numeros.reduce(function(acum , numero) {
		acum += numero; //sentences for iter of numeros
		return acum;
	}, 0); // 0 is the firts value for last value
}

// fuction dobles with map
// function map return a new array, iter each element of array and appy sentences and push it into new array
const dobles = (...numeros) => numeros.map( numero =>  numero * 2);

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0); 

console.log(`${suma(2, 3, 12, 600, 45)}`); 
console.log(`${dobles(2, 3, 12, 600, 45)}`);
console.log(`${pares(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);


//------------------------------ CLOSURES ------------------------------------------------------------------

/* there is a closure that put a prefic to words, function notation
function prefijo(pre) {
	 return function preword(word) {
	 	return pre + word;
	 }
}
*/

// array function notation
const prefijo = (pre) => (word) => pre + word;

let re = prefijo("re");
let sub = prefijo("sub");

console.log(re("guapo"));
console.log(re("listo"));
console.log(sub("normal"));
console.log(sub("marino"));
