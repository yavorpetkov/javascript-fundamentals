function censoredWords(text, word) {
	let repeatedStr = '*'.repeat(word.length);
	let censored = text.replace(word, repeatedStr);
	while (censored.includes(word)) {
		censored = censored.replace(word, repeatedStr);
	}
	console.log(censored);
}
censoredWords('A small sencence with some words', 'small');
