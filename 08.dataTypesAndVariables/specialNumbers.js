function specialNumbers(num) {
	let loopEnder = num;
	let sum = 0;
	for (let i = 1; i <= loopEnder; i++) {
		i = i.toString();
		for (let h = 0; h < i.length; h++) {
			sum += Number(i[h]);
		}
		if (sum === 5 || sum === 7 || sum === 11) {
			console.log(`${i} -> True`);
			sum = 0;
			continue;
		}
		console.log(`${i} -> False`);
		sum = 0;
	}
}
specialNumbers(15);
