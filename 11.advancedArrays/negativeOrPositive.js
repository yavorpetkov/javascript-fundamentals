function negativeOrPositive(arr) {
	const numArr = newArr(arr);
	function newArr(arr) {
		const newArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= 0) {
				newArr.push(arr[i]);
			} else {
				newArr.unshift(arr[i]);
			}
		}
		return newArr;
	}
	for (let i = 0; i < numArr.length; i++) {
		console.log(numArr[i]);
	}
}
negativeOrPositive([ 7, -2, 8, 9 ]);
