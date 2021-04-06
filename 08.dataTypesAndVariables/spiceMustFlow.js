function spice(yieldDrop) {
	let days = 0;
	let leftovers = 0;
	for (let i = yieldDrop; i >= 100; i = i - 10) {
		leftovers = i + leftovers - 26;
		days++;
	}
	console.log(days);
	console.log(leftovers - 26);
}
spice(111);
