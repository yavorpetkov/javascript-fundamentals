function inventory(arr) {
	const heroes = [];
	for (const hero of arr) {
		let [ heroName, level, items ] = hero.split(' / ');
		items = items.split(', ').sort().join(', ');
		heroes.push({ hero: heroName, level: level, items: items });
	}
	heroes.sort((a, b) => a.level - b.level);

	for (const currentHero of heroes) {
		console.log(`Hero: ${currentHero.hero}`);
		console.log(`level => ${currentHero.level}`);
		console.log(`items => ${currentHero.items}`);
	}
}
inventory([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara'
]);
