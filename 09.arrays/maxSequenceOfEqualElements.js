function maxSequence(arr) {
	let max = [];
	let biggestPosible = 0;
	let counter = 0;
	for (let i = 0; i < arr.length; ) {
		for (let h = arr[i]; h === arr[i]; i++) {
			counter++;
		}
		if (counter > biggestPosible) {
			biggestPosible = counter;
			max = arr.slice(i - biggestPosible, i);
		}
		counter = 0;
	}
	console.log(max.join(' '));
}
maxSequence([ 1, 1, 1, 2, 3, 1, 3, 3 ]);
