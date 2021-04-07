function sumEven(input) {
	let result = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] % 2 === 0) {
			result += Number(input[i]);
		}
	}
	console.log(result);
}
sumEven([ '1', '2', '3', '4', '5', '6' ]);
