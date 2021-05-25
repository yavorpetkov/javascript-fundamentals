function neighborhoods(array) {
	let myMap = new Map();
	let neighborhoods = array.shift().split(', ');

	for (const neighborhood of neighborhoods) {
		myMap.set(neighborhood, []);
	}
	for (const line of array) {
		let [ neighborhood, person ] = line.split(' - ');
		if (neighborhoods.includes(neighborhood)) {
			myMap.get(neighborhood).push(person);
		}
	}
	let sorted = Array.from(myMap).sort((a, b) => b[1].length - a[1].length);

	for (const [ neighborhood, residents ] of sorted) {
		console.log(`${neighborhood}: ${residents.length}`);
		for (const person of residents) {
			console.log(`--${person}`);
		}
	}
}
neighborhoods([
	'Abbey Street, Herald Street, Bright Mews',
	'Bright Mews - Garry',
	'Bright Mews - Andrea',
	'Invalid Street - Tommy',
	'Abbey Street - Billy'
]);
