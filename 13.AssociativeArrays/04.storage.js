function storage(array) {
	let map = new Map();

	for (const line of array) {
		let [ product, quantity ] = line.split(' ');
		quantity = Number(quantity);

		if (!map.has(product)) {
			map.set(product, +quantity);
		} else {
			let currentQuantity = map.get(product);
			let newQuantity = (currentQuantity += quantity);
			map.set(product, newQuantity);
		}
	}
	for (let [ key, value ] of map) {
		console.log(`${key} -> ${value}`);
	}
}
storage([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ]);
