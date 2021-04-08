function maxNumbers(arr) {
	let result = '';

	for (let i = 0; i < arr.length; i++) {
		let ifTrue = true;
		for (let h = i; h < arr.length; h++) {
			if (arr[i] <= arr[h + 1]) {
				ifTrue = false;
				break;
			}
		}
		if (ifTrue) {
			result += arr[i] + ' ';
			ifTrue = false;
		}
	}
	console.log(result);
}
maxNumbers([ 27, 19, 42, 2, 13, 45, 48 ]);
