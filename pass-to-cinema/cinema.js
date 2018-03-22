/*
* Can watch movie at cinema with array functions
*/

const movie_name = "StarWars7: el despertar de la fuerza";
const movie_min_age = 13;

const name_david = "David Hernández";
const david_age = 26;

const name_zoe = "Zoé Díaz";
const zoe_age = 6;

const name_nino = "niñito";
const nino_age = 12;

const canWatchMovie = (name, age, comeWithAdult = false) => {
	if(age >= 13)
		console.log(`${name} puede entrar a ver ${movie_name} ya que tiene ${movie_min_age} años o más`);
	else if(comeWithAdult)
		console.log(`${name} puede entrar a ver ${movie_name} ya que a pesar de no tener ${movie_min_age} años o más viene acompañado/a de un adulto`);
	else
		console.log(`${name} no puede entrar a ver ${movie_name}`);
}; 

canWatchMovie(name_david, david_age);
canWatchMovie(name_zoe, zoe_age, comeWithAdult = true);
canWatchMovie(name_nino, nino_age);