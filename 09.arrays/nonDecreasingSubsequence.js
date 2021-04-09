function nonDecreasing(arr) {
	let currentNums = [];

	arr.filter((number) => {
		if (currentNums.length === 0) {
			currentNums.push(number);
		} else if (number >= currentNums[currentNums.length - 1]) {
			currentNums.push(number);
		}
	});

	console.log(currentNums.join(' '));
}
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]);
