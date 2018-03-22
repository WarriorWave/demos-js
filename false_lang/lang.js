/* using string methods for make translation to seudo language "WarWave" with following rules:
*  1. if a word finish with "ar", this silabe will be remove
*  2. if a word start with "z" must add "pe" to end
*  3. if translated word is mayor or equal 10 characters, will be cut to half and glue with '-'
*  4. if the word is a palindrome, no one of before rules apply and it will write itself with lower and upper character alternatively
*/

function WarrWave(str) {
	let translate = str;

	// rule 1, put to lower and evaluate if finish with "ar"
	if (str.toLowerCase().endsWith("ar")) {
		// slice until behind of ar
		translate = str.slice(0, -2)	
	}

	// rule 2, put it lower snd evaluate if start with 'z'   
	if (str.toLowerCase().startsWith('z')) {
		// add "pe" to str
		translate += "pe";
	}
	
	// rule 3, calculate length of str
	const length = translate.length; 
	if (length >= 10) {
		const firtStr = translate.slice(0, Math.round(length / 2)); //slice str since 0 until half
		const secondStr = translate.slice(Math.round(length / 2));  //slice half since 0 until end
		translate = `${firtStr}-${secondStr}`;	// concat firts str half, '-' and second str half
	}

	// rule 4,  array function  with transform string to array, reverse str order, and return to string
	// ---Array functions --
	const reverse = (str) => str.split("").reverse().join("");
	const minMay = (str) => {
		let minMay = '';
		let strArray = str.split("");
		for (let i = 0; i < str.length; i++) {
			if (i % 2 == 0)
				minMay += strArray[i].toLowerCase();
			else
				minMay += strArray[i].toUpperCase();
		}
		return minMay;
	}

	// --- Evaluation --
	if (str.toLowerCase() == reverse(str.toLowerCase())) {
		translate = minMay(str);
		console.log('son palindromos');
	}

	console.log(`la traducción es ${translate}`);
}

WarrWave("Programar");
WarrWave("Zebra");
WarrWave("Zarpar");
WarrWave("Zologicos");
WarrWave("Sometemos")