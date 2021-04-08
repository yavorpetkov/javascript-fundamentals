function arrayRotation(arr, num) {
	let result = '';

	for (let i = 0; i < num; i++) {
		arr.push(arr.shift());
	}
	for (let h = 0; h < arr.length; h++) {
		result += arr[h] + ' ';
	}

	console.log(result);
}
arrayRotation([ 51, 47, 32, 61, 21 ], 2);
arrayRotation([ 32, 21, 61, 1 ], 4);
arrayRotation([ 2, 4, 15, 31 ], 5);
