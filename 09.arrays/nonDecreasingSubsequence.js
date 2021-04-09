function nonDecreasing(arr) {
	let biggestNum = 0;
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let currentNum = arr[i];
		if (currentNum > biggestNum) {
			biggestNum = currentNum;
			newArr.push(arr[i]);
		}
	}
	console.log(newArr.join(' '));
}
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]);
