/*
* This Script obtains the time that has pased since your birthday until today
*/

function timePass(ms) {
	let seconds = ms / 1000;
	let mins = seconds / 60;
	let hours = mins / 60;
	let days = hours / 24;

	return `han pasado ${seconds} segundos, ${mins} minutos, ${hours} horas y ${days} días`; 
}

// new instance of Date with year, month and day as attributes
const birthday = new Date(1991, 11, 24);
const today = new Date(); // if no params insert return current day

time = today - birthday; // to make Date operations javascript pass dates to miliseconds

console.log(`Desde la fecha ${birthday} ${timePass(time)}`)






