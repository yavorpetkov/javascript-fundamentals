function reverseString(input) {
	let result = '';
	for (let i = input.length - 1; i >= 0; i--) {
		result += input[i] + ' ';
	}
	console.log(result);
}
reverseString([ 'a', 'b', 'c', 'd', 'e' ]);
