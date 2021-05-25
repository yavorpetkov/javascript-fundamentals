function piccolo(array) {
	function sortingCars(a, b) {
		for (let i = 2; i < 6; i++) {
			if (a[0][i] !== b[0][i]) {
				let aCar = a[0][i];
				let bCar = b[0][i];
				return aCar - bCar;
			}
		}
	}
	let myMap = new Map();
	for (const line of array) {
		let [ place, car ] = line.split(', ');
		if (place === 'IN') {
			myMap.set(car, place);
		} else if (place === 'OUT') {
			myMap.delete(car);
		}
	}
	let sorted = Array.from(myMap).sort((a, b) => sortingCars(a, b));

	if (sorted.length > 0) {
		for (const [ key ] of sorted) {
			console.log(key);
		}
	} else {
		console.log('Parking Lot is Empty');
	}
}
piccolo([
	'IN, CA2844AA',
	'IN, CA1234TA',
	'OUT, CA2844AA',
	'IN, CA9999TT',
	'IN, CA2866HI',
	'OUT, CA1234TA',
	'IN, CA2844AA',
	'OUT, CA2866HI',
	'IN, CA9876HH',
	'IN, CA2822UU'
]);
