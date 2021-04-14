function palindrome(arr) {
	let bulNum = true;
	for (let i = 0; i < arr.length; i++) {
		let numString = arr[i].toString();
		for (let j = 0; j < numString.length; j++) {
			if (Number(numString[j]) !== Number(numString[numString.length - 1 - j])) {
				bulNum = false;
				break;
			}
		}
		console.log(bulNum);
		bulNum = true;
	}
}
palindrome([ 32, 2, 232, 1010 ]);
