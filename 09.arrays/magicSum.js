function magicSum(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		for (let h = i + 1; h < arr.length; h++) {
			if (num === Number(arr[i]) + Number(arr[h])) {
				console.log(`${arr[i]} ${arr[h]}`);
			}
		}
	}
}
magicSum([ 14, 20, 60, 13, 7, 19, 8 ], 27);
