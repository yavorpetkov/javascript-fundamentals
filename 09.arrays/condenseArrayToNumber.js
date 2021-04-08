function condenseNumber(input) {
	let condense = [];
	let result = 0;
	for (let h = input.length; h !== 1; h++) {
		for (let i = 0; i <= input.length - 2; i++) {
			condense[i] = Number(input[i] + Number(input[i + 1]));
		}
		input = condense;
		condense = [];
		if (input.length - 2 === 0) {
			break;
		}
	}
	if (input.length === 1) {
		console.log(input[0]);
	} else {
		result = Number(input[0]) + Number(input[1]);
		console.log(result);
	}
}
condenseNumber([ 1 ]);
