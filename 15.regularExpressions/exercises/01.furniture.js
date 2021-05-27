function furniture(input) {
	let checker = />>(?<product>.+)<<(?<price>.+)!(?<quantity>\d+)/;
	let totalMoney = 0;
	const boughtProducts = [];
	for (const item of input) {
		let currentItem = checker.exec(item);
		if (item.match(checker)) {
			let product = currentItem.groups['product'];
			let price = Number(currentItem.groups['price']);
			let quantity = Number(currentItem.groups['quantity']);
			boughtProducts.push(product);
			totalMoney += price * quantity;
		} else if (item === 'Purchase') {
			break;
		}
	}
	printItems(boughtProducts, totalMoney);

	function printItems(boughtProducts, totalMoney) {
		console.log('Bought furniture:');
		for (const item of boughtProducts) {
			console.log(item);
		}
		console.log(`Total money spend: ${totalMoney}`);
	}
}
furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
