function bombNumbers(arr, bombs) {
	const theBomb = bombs.shift();
	const radius = bombs.shift();

	for (let i = 0; i < arr.length; ) {
		bombIndex = arr.findIndex((el) => el === theBomb);
		if (bombIndex !== -1) {
			removeBombs(bombIndex, radius);
		} else {
			break;
		}
	}
	console.log(arr.reduce((a, b) => a + b));
	function removeBombs(bombIndex, radius) {
		let startIndex = bombIndex - radius === 0 ? 0 : bombIndex - radius;
		let bombed = 1 + radius * 2;
		arr.splice(startIndex, bombed);
	}
}
bombNumbers([ 1, 4, 4, 2, 8, 9, 1 ], [ 9, 3 ]);
