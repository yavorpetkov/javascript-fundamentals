function addressBook(array) {
	array.sort();
	const address = {};
	for (const line of array) {
		let [ name, place ] = line.split(':');
		address[name] = place;
	}
	for (const iterator of Object.entries(address)) {
		console.log(`${iterator[0]} -> ${iterator[1]}`);
	}
}
addressBook([ 'Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd' ]);
