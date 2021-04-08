function mergeArrays(firstArr, secondArr) {
	let newArr = [];
	let result = '';
	for (let i = 0; i < firstArr.length; i++) {
		if (i === 0 || i % 2 === 0) {
			newArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
		} else if (i % 2 !== 0) {
			newArr[i] = firstArr[i] + secondArr[i];
		}
		result += newArr[i];
		if (i < firstArr.length - 1) {
			result += ' - ';
		}
	}
	console.log(result);
}
mergeArrays([ '5', '15', '23', '56', '35' ], [ '17', '22', '87', '36', '11' ]);
