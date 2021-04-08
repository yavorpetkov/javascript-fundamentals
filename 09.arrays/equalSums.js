function equalSums(array) {
	let firstSum = Number(array[0]);
	let secondSum = 0;
	let output = 0;
	if (array.length !== 1 || array.length !== 2) {
		for (let i = 1; i < array.length; i++) {
			output = i + 1;
			firstSum += Number(array[i]);
			for (let h = array.length - 1; h > i + 1; h--) {
				secondSum += Number(array[h]);
			}
			if (firstSum === secondSum) {
				break;
			}
			secondSum = 0;
		}
	}
	if (array.length === 1) {
		console.log(0);
	} else if (firstSum === secondSum) {
		console.log(output);
	} else {
		console.log('no');
	}
}
equalSums([ 1, 2, 3, 3 ]);
equalSums([ 10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4 ]);
equalSums([ 1, 2 ]);
equalSums([ 1 ]);
equalSums([ 1, 2, 3 ]);
