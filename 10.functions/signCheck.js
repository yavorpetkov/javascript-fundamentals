function check(a, b, c) {
	let result = '';
	if (a < 0 && b >= 0 && c >= 0) {
		result = 'Negative';
	} else if (a >= 0 && b < 0 && c >= 0) {
		result = 'Negative';
	} else if (a >= 0 && b >= 0 && c < 0) {
		result = 'Negative';
	} else if (a < 0 && b < 0 && c < 0) {
		result = 'Negative';
	} else {
		result = 'Positive';
	}
	console.log(result);
}
