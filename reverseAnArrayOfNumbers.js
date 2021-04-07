function reverseAnArray(num, input) {
	let result = '';
	for (let i = num - 1; i >= 0; i--) {
		result += input[i] + ' ';
	}
	console.log(result);
}
reverseAnArray(3, [ 10, 20, 30, 40, 50 ]);
