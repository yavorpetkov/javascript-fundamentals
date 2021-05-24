function phoneBook(array) {
	let employees = {};
	for (const iterator of array) {
		let [ name, number ] = iterator.split(' ');
		employees[name] = number;
	}

	for (const iterator of Object.entries(employees)) {
		console.log(`${iterator[0]} -> ${iterator[1]}`);
	}
}
phoneBook([ 'Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344' ]);
