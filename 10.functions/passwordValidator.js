function passwordValidator(str) {
	let bigEnough = isBig(str);
	let twoNums = howManyNums(str);
	let noSymbols = isThereSymbol(str);

	if (!bigEnough) {
		console.log('Password must be between 6 and 10 characters');
	}
	if (!noSymbols) {
		console.log('Password must consist only of letters and digits');
	}
	if (!twoNums) {
		console.log('Password must have at least 2 digits');
	}
	if (bigEnough === true && noSymbols === true && twoNums === true) {
		console.log('Password is valid');
	}
}
function isItBig(str) {
	if (str.length >= 6 && str.length <= 10) {
		return true;
	} else {
		return false;
	}
}
function isThereSymbol(str) {
	for (let i = 0; i < str.length; i++) {
		let currentLetter = str[i];
		for (let j = 32; j <= 127; j++) {
			if (j === 48) {
				j = 58;
			} else if (j === 65) {
				j = 91;
			} else if (j === 97) {
				j = 123;
			}
			if (currentLetter.charCodeAt() === j) {
				return false;
			}
		}
	}
	return true;
}
function howManyNums(str) {
	let numCounter = 0;
	for (let i = 0; i < str.length; i++) {
		if (Number.isInteger(Number(str[i]))) {
			numCounter++;
			if (numCounter === 2) {
				return true;
			}
		}
	}
	return false;
}
passwordValidator('logIn');
