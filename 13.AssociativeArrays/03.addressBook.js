function addressBook(array) {
	const address = {};
	for (const line of array) {
		let [ name, place ] = line.split(':');
		address[name] = place;
	}
	let sorted = Object.entries(address);
	sorted.sort(([ keyA ], [ keyB ]) => {
		return keyA.localeCompare(keyB);
	});
	for (const iterator of sorted) {
		console.log(`${iterator[0]} -> ${iterator[1]}`);
	}
}
addressBook([ 'Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd' ]);
