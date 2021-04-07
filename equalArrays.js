function equalArrays(arrOne, ArrTwo) {
	let areEqual = true;
	let sum = 0;
	for (let i = 0; i < arrOne.length; i++) {
		sum += Number(arrOne[i]);
		if (arrOne[i] !== ArrTwo[i]) {
			console.log(`Arrays are not identical. Found difference at ${i} index`);
			areEqual = false;
			break;
		}
	}
	if (areEqual) {
		console.log(`Arrays are identical. Sum: ${sum}`);
	}
}
equalArrays([ '1' ], [ '10' ]);
