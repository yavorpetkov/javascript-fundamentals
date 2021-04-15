function radioCrystal(crystalArr) {
	let counter = 0;
	let wantedCrystal = crystalArr.shift();
	let operationsArr = [ 'Cut', 'Lap', 'Grind', 'Etch' ];

	for (let i = 0; i < crystalArr.length; i++) {
		let currentCrystal = crystalArr[i];
		let done = false;
		console.log(`Processing chunk ${currentCrystal} microns`);
		for (let j = 0; j < operationsArr.length; j++) {
			if (done) {
				break;
			}
			let currentOperation = operationsArr[j];
			if (currentCrystal > wantedCrystal) {
				for (let k = currentCrystal; k > wantedCrystal; k++) {
					if (currentOperation === 'Cut') {
						if (currentCrystal / 4 >= wantedCrystal) {
							currentCrystal /= 4;
						} else {
							break;
						}
					} else if (currentOperation === 'Lap') {
						if (currentCrystal * 0.8 >= wantedCrystal) {
							currentCrystal *= 0.8;
						} else {
							break;
						}
					} else if (currentOperation === 'Grind') {
						if (currentCrystal - 20 >= wantedCrystal) {
							currentCrystal -= 20;
						} else {
							break;
						}
					} else if (currentOperation === 'Etch') {
						if (currentCrystal - 2 >= wantedCrystal - 1) {
							currentCrystal -= 2;
						} else {
							break;
						}
					}
					counter++;
					if (currentCrystal === wantedCrystal) {
						done = true;
						break;
					}
				}
				console.log(`${currentOperation} x${counter}`);

				counter = 0;
			}
			console.log('Transporting and washing');
			if (currentCrystal < wantedCrystal) {
				currentCrystal += 1;
				console.log('X-ray x1');
			}
		}
		console.log(`Finished crystal ${Math.floor(currentCrystal)} microns`);
	}
}
radioCrystal([ 1375, 50000 ]);
