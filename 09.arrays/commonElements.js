function commonElements(firstArr, secondArr) {
	for (let i = 0; i < firstArr.length; i++) {
		for (let h = 0; h < secondArr.length; h++) {
			if (firstArr[i] === secondArr[h]) {
				console.log(firstArr[i]);
			}
		}
	}
}
commonElements([ 'Hey', 'hello', 2, 4, 'Peter', 'e' ], [ 'Petar', 10, 'hey', 4, 'hello', '2' ]);
