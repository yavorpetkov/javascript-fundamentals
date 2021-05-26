function hashTag(text) {
	let textArr = text.split(' ');
	for (const word of textArr) {
		if (word.startsWith('#') && !word.endsWith('#')) {
			let newWord = word.replace('#', '');
			while (newWord.includes('#')) {
				newWord = word.replace('#', '');
			}
			console.log(newWord);
		}
	}
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
