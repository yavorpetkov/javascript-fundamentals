function triplesOfLatinLetters(num) {
	let letter = '';
	let breaker = false;
	for (let i = 0; i < num; i++) {
		let a = String.fromCharCode(97 + i);
		for (let h = 0; h < num; h++) {
			let b = String.fromCharCode(97 + h);
			for (let z = 0; z < num; z++) {
				let c = String.fromCharCode(97 + z);
				console.log(`${a}${b}${c}`);
			}
		}
	}
}
triplesOfLatinLetters(3);
