function removeRepeatingChars(text) {
	let textArr = text.split('');
	let currentLetter = textArr[0];
	let newWord = currentLetter;
	for (const ch of textArr) {
		if (ch !== currentLetter) {
			currentLetter = ch;
			newWord += currentLetter;
		}
	}
	console.log(newWord);
}
removeRepeatingChars('aaaaabbbbbcdddeeeedssaa');
