function addAndSubtract(input) {
	let sum = 0;
	let sumAfterMod = 0;
	let newArr = [];
	for (let i = 0; i <= input.length - 1; i++) {
		sum += Number(input[i]);
		if (i === 0) {
			newArr[i] = Number(input[i]);
		} else if (Number(input[i]) % 2 === 0) {
			newArr[i] = Number(input[i] + i);
		} else {
			newArr[i] = Number(input[i] - i);
		}
		sumAfterMod += Number(newArr[i]);
	}

	console.log(newArr);
	console.log(sum);
	console.log(sumAfterMod);
}
addAndSubtract([ 5, 15, 23, 56, 35 ]);
