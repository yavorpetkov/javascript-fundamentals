function travelTime(array) {
	const destinations = {};
	for (const line of array) {
		let [ country, city, price ] = line.split(' > ');
		if (destinations[country]) {
			let currentPlace = destinations[country];
			if (currentPlace[city]) {
				let newPrice = Math.min(destinations[country][city], price);
				destinations[country][city] = newPrice;
			} else {
				destinations[country][city] = price;
			}
		} else {
			destinations[country] = { [city]: price };
		}
	}
	let sorted = Object.entries(destinations);
	sorted.sort(([ keyA ], [ keyB ]) => {
		return keyA.localeCompare(keyB);
	});
	for (const [ place, destination ] of sorted) {
		let currentDestination = `${place} -> `;
		for (const [ key, value ] of Object.entries(destination)) {
			currentDestination += `${key} -> ${value} `;
		}
		console.log(currentDestination);
	}
}
travelTime([
	'Bulgaria > Sofia > 500',
	'Bulgaria > Sopot > 800',
	'France > Paris > 2000',
	'Albania > Tirana > 1000',
	'Bulgaria > Sofia > 200'
]);
