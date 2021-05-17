function storeProvision(stock, ordered) {
	let wholeStock = {};
	let quantity = 0;

	for (let i = 0; i < stock.length; i += 2) {
		quantity = stock[i + 1];
		wholeStock[stock[i]] = quantity;
	}

	for (let j = 0; j < ordered.length; j += 2) {
		quantity = ordered[j + 1];
		const foundOrder = (el) => el === ordered[j];
		let newOrder = stock.findIndex(foundOrder);
		if (ordered[j] === stock[newOrder]) {
			wholeStock[ordered[j]] = Number(ordered[j + 1]) + Number(stock[newOrder + 1]);
		} else {
			wholeStock[ordered[j]] = quantity;
		}
	}

	Object.entries(wholeStock).forEach((el) => {
		console.log(`${el[0]} -> ${el[1]}`);
	});
}
storeProvision(
	[ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
	[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
);
