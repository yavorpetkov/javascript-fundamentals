function maxSequence(arr) {
	let newMax = [];
	let max = [];
	for (let i = 0; i < arr.length; i++) {
		newMax.push(arr[i]);
		if (newMax.length > max.length) {
			max = newMax;
		}
		if (arr[i] !== arr[i + 1]) {
			newMax = [];
		}
	}
	console.log(max.join(' '));
}
maxSequence([ 1, 1, 1, 2, 3, 1, 3, 3 ]);
