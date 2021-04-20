function oddNumbers(arr) {
	let oddNumArr = [];
	for (let i = 1; i < arr.length; i++) {
		if (i % 2 !== 0) {
			oddNumArr.unshift(arr[i] * 2);
		}
	}
	console.log(oddNumArr.join(' '));
}
oddNumbers([ 10, 15, 20, 25 ]);
