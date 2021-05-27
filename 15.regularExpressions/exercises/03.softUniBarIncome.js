function softUniBar(array) {
	let checker = /%(?<name>[A-Za-z]+)%<(?<product>[A-Za-z]+)>(.+|)\|(?<quantity>\d+)\|(?<NaNprice>.+)\$/g;
	let totalIncome = 0;
	for (const line of array) {
		let currentItem = checker.exec(line);
		if (line.match(checker)) {
			let name = currentItem.groups['name'];
			let product = currentItem.groups['product'];
			let quantity = Number(currentItem.groups['quantity']);
			let price = Number(currentItem.groups['NaNprice'].replace(/[A-Za-z]+/g, ''));
			if (name && product && quantity && price && name !== 'InvalidName') {
				let wholePrice = price * quantity;
				totalIncome += wholePrice;
				console.log(`${name}: ${product} - ${wholePrice.toFixed(2)}`);
			}
		}
	}
	console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBar([ '%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift' ]);
