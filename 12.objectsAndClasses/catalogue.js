function catalogue(arr) {
	arr.sort();
	const organisedByLetter = {};
	for (const iterator of arr) {
		let [ key, value ] = iterator.split(' : ');
		let currrentLetter = key[0];
		value = Number(value);
		if (organisedByLetter[currrentLetter]) {
			organisedByLetter[currrentLetter][key] = value;
		} else {
			organisedByLetter[currrentLetter] = { [key]: value };
		}
	}
	for (const letter of Object.keys(organisedByLetter)) {
		console.log(letter);
		for (const product of Object.entries(organisedByLetter[letter])) {
			console.log(`  ${product[0]}: ${product[1]}`);
		}
	}
}

catalogue([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10'
]);
