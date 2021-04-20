function smallestTwoNums(arr) {
	let sorted = arr.sort((a, b) => (a > b ? 1 : -1));
	const theSmalest = sorted.slice(0, 2);
	console.log(theSmalest.join(' '));
}
smallestTwoNums([ 3, 0, 10, 4, 7, 3 ]);
