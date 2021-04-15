function carWash(arr) {
	let value = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'soap') {
			value += 10;
		} else if (arr[i] === 'water') {
			value *= 1.2;
		} else if (arr[i] === 'vacuum cleaner') {
			value *= 1.25;
		} else if (arr[i] === 'mud') {
			value *= 0.9;
		}
	}
	console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash([ 'soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water' ]);
