function piccolo(array) {
	let myParking = [];
	for (const line of array) {
		let [ place, car ] = line.split(', ');
		if (place === 'IN' && !myParking.includes(car)) {
			myParking.push(car);
		} else if (place === 'OUT' && myParking.includes(car)) {
			let index = myParking.indexOf(car);
			myParking.splice(index, 1);
		}
	}

	if (myParking.length > 0) {
		console.log(myParking.sort((a, b) => a.localeCompare(b)).join('\n'));
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
