function magicMatrices(arr) {
	let sum = arr[1].reduce((total, current) => total + current);
	let isTrue = true;

	for (let j = 0; j < arr[1].length; j++) {
		if (!isTrue) {
			break;
		}
		if (arr[j].reduce((total, current) => total + current) !== sum) {
			isTrue = false;
			break;
		}
		let element = [];
		for (let k = 0; k < arr.length; k++) {
			element.push(arr[k][j]);
		}
		if (element.reduce((total, current) => total + current) !== sum) {
			isTrue = false;
			break;
		}
	}
	console.log(isTrue);
}
magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ]);
