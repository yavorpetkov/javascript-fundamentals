function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
	let helmetCount = 0;
	let swordCount = 0;
	let shieldCount = 0;
	let armorCount = 0;
	let result = 0;
	for (let i = 1; i <= lostFights; i++) {
		if (i % 2 === 0 && i % 3 === 0) {
			shieldCount++;
			if (shieldCount % 2 === 0) {
				armorCount++;
			}
		}
		if (i % 2 === 0) {
			helmetCount++;
		}
		if (i % 3 === 0) {
			swordCount++;
		}
	}
	result = helmetPrice * helmetCount + shieldCount * shieldPrice + swordCount * swordPrice + armorCount * armorPrice;
	console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiator(23, 12.5, 21.5, 40, 200);
