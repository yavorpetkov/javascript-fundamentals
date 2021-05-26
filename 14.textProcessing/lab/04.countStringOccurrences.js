function countStringOccurrences(string, word) {
	let words = string.split(' ');
	let counter = 0;
	for (const iterator of words) {
		if (iterator === word) {
			counter++;
		}
	}
	console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
