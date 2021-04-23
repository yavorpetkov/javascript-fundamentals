function equalNeighbors(arr) {
	counter = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (i < arr.length - 1) {
				if (arr[i][j] === arr[i + 1][j]) {
					counter++;
				}
			}
			if (arr[i][j] === arr[i][j + 1]) {
				counter++;
			}
		}
	}
	console.log(counter);
}
equalNeighbors([ [ 2, 2, 5, 7, 4 ], [ 4, 0, 5, 3, 4 ], [ 2, 5, 5, 4, 2 ] ]);
