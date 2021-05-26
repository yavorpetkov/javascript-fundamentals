function stringSubstring(word, text) {
	let lowerCaseText = text.toLowerCase();
	let textArr = lowerCaseText.split(' ');
	let notFound = true;
	for (const line of textArr) {
		if (line === word) {
			console.log(line);
			notFound = false;
			break;
		}
	}
	if (notFound) {
		console.log(`${word} not found!`);
	}
}
stringSubstring('python', 'JavaScript is the best programming language');
