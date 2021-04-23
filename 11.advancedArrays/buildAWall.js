function buildAWall(arr) {
	arr = arr.map(Number);
	let pesos = 0;
	const pesosArr = [];
	while (arr.reduce((a, b) => a + b) < arr.length * 30) {
		let currentPesos = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] < 30) {
				arr[j]++;
				pesos += 195;
				currentPesos += 195;
			}
		}
		pesosArr.push(currentPesos);
	}
	console.log(pesosArr.join(', '));
	console.log(`${pesos * 1900} pesos`);
}
buildAWall([ 21, 25, 28 ]);
