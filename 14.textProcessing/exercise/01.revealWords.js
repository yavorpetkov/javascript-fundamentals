function revealWords(words, text) {
	let wordsArr = words.split(', ');
	for (const word of wordsArr) {
		text = text.replace('*'.repeat(word.length), word);
	}
	console.log(text);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
