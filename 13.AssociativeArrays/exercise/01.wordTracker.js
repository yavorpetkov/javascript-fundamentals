function wordTracker(array) {
	let myMap = new Map();
	let wordsNeeded = array.shift().split(' ');
	const quantity = 1;

	for (const word of array) {
		let sameWord = wordsNeeded.find((el) => el === word);
		if (sameWord) {
			if (!myMap.has(word)) {
				myMap.set(word, +quantity);
			} else {
				let currentQuantity = myMap.get(word);
				let newQuantity = (currentQuantity += quantity);
				myMap.set(word, newQuantity);
			}
		}
	}
	let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);

	for (const [ key, value ] of sorted) {
		console.log(`${key} - ${value}`);
	}
}
wordTracker([
	'this sentence In to the',
	'In',
	'this',
	'sentence',
	'you',
	'have',
	'to',
	'count',
	'the',
	'occurances',
	'of',
	'the',
	'words',
	'this',
	'and',
	'sentence',
	'because',
	'this',
	'is',
	'your',
	'task'
]);
