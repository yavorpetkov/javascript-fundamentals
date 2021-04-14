function oddAndEvenSums(num) {
	let oddSum = oddNums(num);
	let evenSum = evenNums(num);

	console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
function oddNums(num) {
	let stringNum = num.toString();
	let sum = 0;
	for (let i = 0; i < stringNum.length; i++) {
		if (Number(stringNum[i]) % 2 !== 0) {
			sum += Number(stringNum[i]);
		}
	}
	return sum;
}
function evenNums(num) {
	let stringNum = num.toString();
	let sum = 0;
	for (let i = 0; i < stringNum.length; i++) {
		if (Number(stringNum[i]) % 2 === 0) {
			sum += Number(stringNum[i]);
		}
	}
	return sum;
}

oddAndEven(1000435);
