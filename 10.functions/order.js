function order(product, quantity) {
	if (product === 'coffee') {
		console.log((1.5 * quantity).toFixed(2));
	} else if (product === 'water') {
		console.log((1 * quantity).toFixed(2));
	} else if (product === 'coke') {
		console.log((1.4 * quantity).toFixed(2));
	} else if (product === 'snacks') {
		console.log((2 * quantity).toFixed(2));
	}
}
