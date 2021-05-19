function dictionary(arr) {
	const dictionary = {};
	const keyWord = [];

	for (const iterator of arr) {
		let word = JSON.parse(iterator);
		let meaning = Object.entries(word);
		let key = meaning[0][0];
		let value = meaning[0][1];
		dictionary[key] = value;
		keyWord.push(key);
	}

	keyWord.sort();

	for (const word of keyWord) {
		console.log(`Term: ${word} => Definition: ${dictionary[word]}`);
	}
}
dictionary([
	'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
	'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
	'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
	'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
	'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
