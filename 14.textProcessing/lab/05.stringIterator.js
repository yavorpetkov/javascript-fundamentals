function stringIterator(string) {
	let stringArr = string.split(' ');
	for (const word of stringArr) {
		console.log(word);
	}
}
stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');
