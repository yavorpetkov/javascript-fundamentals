function sumDigits(num) {
	let numString = num.toString();
	let sum = 0;
	for (let i = 0; i < numString.length; i++) {
		sum += Number(numString[i]);
	}
	console.log(sum);
}
sumDigits(245678);
