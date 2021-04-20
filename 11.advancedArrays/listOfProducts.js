function listOfProd(arr) {
	const sorted = arr.sort();
	for (let i = 0; i < arr.length; i++) {
		console.log(`${i + 1}.${sorted[i]}`);
	}
}
listOfProd([ 'Potatoes', 'Tomatoes', 'Onions', 'Apples' ]);
