function cutAndReverse(string) {
	function reverseString(input) {
		let result = '';
		for (let i = input.length - 1; i >= 0; i--) {
			result += input[i];
		}
		console.log(result);
	}

	let firstWord = string.slice(0, string.length / 2);
	let secondWord = string.slice(string.length / 2, string.length);
	reverseString(firstWord);
	reverseString(secondWord);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
