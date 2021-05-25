function aMinerTask(array) {
	const materials = {};

	for (let i = 0; i < array.length; i += 2) {
		let currentMat = array[i];
		let currentQuantity = Number(array[i + 1]);
		if (materials[currentMat]) {
			let newQuantity = materials[currentMat] + currentQuantity;
			materials[currentMat] = newQuantity;
		} else {
			materials[currentMat] = currentQuantity;
		}
	}
	for (const [ material, quantity ] of Object.entries(materials)) {
		console.log(`${material} -> ${quantity}`);
	}
}
aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17' ]);
