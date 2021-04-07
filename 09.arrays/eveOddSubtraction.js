function eveOddSubtraction(input) {
	let even = 0;
	let odd = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] % 2 === 0) {
			even += Number(input[i]);
		} else {
			odd += Number(input[i]);
		}
	}
	console.log(even - odd);
}
eveOddSubtraction([ 1, 2, 3, 4, 5, 6 ]);
