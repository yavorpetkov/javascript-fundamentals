function caseSplitter(string) {
	let firstIndex = 0;
	let wordsArr = [];
	for (let i = 1; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			wordsArr.push(string.slice(firstIndex, i));
			firstIndex = i;
		} else if (i === string.length - 1) {
			wordsArr.push(string.slice(firstIndex, i + 1));
		}
	}
	console.log(wordsArr.join(', '));
}
caseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
