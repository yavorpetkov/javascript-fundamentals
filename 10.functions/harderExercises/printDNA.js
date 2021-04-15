function printDNA(num) {
	let counter = 0;
	let dnaArr = [ 'AT', 'CG', 'TT', 'AG', 'GG' ];
	let goingDown = false;
	for (let i = 0; i < num; i++) {
		let dna = dnaArr.shift();
		let splitDna = dna.split('');

		if (counter === 0) {
			console.log(`**${dna}**`);
			counter++;
			goingDown = false;
		} else if (counter === 1) {
			splitDna.splice(1, 0, '--');
			console.log(`*${splitDna.join('')}*`);
			if (goingDown) {
				counter--;
			} else {
				counter++;
			}
		} else if (counter === 2) {
			splitDna.splice(1, 0, '----');
			console.log(`${splitDna.join('')}`);
			counter--;
			goingDown = true;
		}
		dnaArr.push(dna);
	}
}
printDNA(10);
