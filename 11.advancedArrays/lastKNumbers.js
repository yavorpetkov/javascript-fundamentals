function lastNumSequence(length, elements) {
	const numArr = [ 1, 1 ];

	for (let i = 2; i < length; i++) {
		let newNum = 0;
		let currentJ = 0;
		if (numArr.length > elements) {
			currentJ = numArr.length - elements;
		}
		newNum = numArr.slice(currentJ, numArr.length).reduce((total, current) => total + current);

		numArr.push(newNum);
	}

	console.log(numArr.join(' '));
}
lastNumSequence(8, 2);
