function numModification(num) {
	let numString = num.toString();
	let moreThanFive = 0;
	for (let i = 0; i < numString.length; i++) {
		if (numString[i] >= 5) {
			moreThanFive++;
		}
		if (moreThanFive > numString.length / 2) {
			break;
		}
		if (i === numString.length - 1) {
			numString += '9';
		}
	}
	console.log(Number(numString));
}
numModification(101);
