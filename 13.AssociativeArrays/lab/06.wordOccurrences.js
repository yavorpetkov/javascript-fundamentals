function wordOccurrences(array) {
	let myMap = new Map();
	const quantity = 1;
	for (const word of array) {
		if (!myMap.has(word)) {
			myMap.set(word, +quantity);
		} else {
			let currentQuantity = myMap.get(word);
			let newQuantity = (currentQuantity += quantity);
			myMap.set(word, newQuantity);
		}
	}
	let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);

	for (const [ key, value ] of sorted) {
		console.log(`${key} -> ${value} times`);
	}
}
wordOccurrences([
	'Here',
	'is',
	'the',
	'first',
	'sentence',
	'Here',
	'is',
	'another',
	'sentence',
	'And',
	'finally',
	'the',
	'third',
	'sentence'
]);
