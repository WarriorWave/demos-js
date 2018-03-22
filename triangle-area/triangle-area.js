/* let is a scope variable his scope is definied for the block on it is place, var variables are global or function
*  public variable
 */
let base = 5;
let height = 7;
let radio = 10;

/* Standar function */

/*
	function triangleArea(base, height) {
		return base * height / 2;
	} 
*/

/* Array function is a new way for make functions,
*  the sintaxis for simple array function is this:
*  if the operation may have more operations will be:
*  const triangleArea = (base, height) => {
      n opertons;
      return base * height / 2;
   }
*/
const triangleArea = (base, height) => base * height / 2;

// Bonus!! circleArea array function
const circleArea = (radio) => Math.PI * Math.pow(radio, 2);

/* Javascript has new type of concat with  ` character and ${} */
console.log(`El área del triángulo de base ${base} y altura ${height} es: 
${triangleArea(base, height)}u`);

console.log(`El área del circulo de radio ${radio} es:
${circleArea(radio)}u`);
