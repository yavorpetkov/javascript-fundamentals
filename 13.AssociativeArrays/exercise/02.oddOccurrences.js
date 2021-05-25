function oddOccurrences(string) {
	function deleteEvenWords(arr) {
		for (const line of arr) {
			let currentQuantity = myMap.get(line);
			if (currentQuantity % 2 === 0) {
				myMap.delete(line);
			}
		}
		let leftovers = Array.from(myMap);
		for (const [ key ] of leftovers) {
			oddOccurrences.push(key);
		}
	}
	string = string.toLowerCase();
	let myMap = new Map();
	let occurancesArr = string.split(' ');
	const oddOccurrences = [];
	const quantity = 1;
	for (const word of occurancesArr) {
		if (!myMap.has(word)) {
			myMap.set(word, +quantity);
		} else {
			let currentQuantity = myMap.get(word);
			let newQuantity = (currentQuantity += quantity);
			myMap.set(word, newQuantity);
		}
	}
	deleteEvenWords(occurancesArr);

	console.log(oddOccurrences.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
