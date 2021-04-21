function distinctArr(array) {
	for (let i = 0; i < array.length; i++) {
		let currentNum = array.shift();
		array = array.filter((num) => num !== currentNum);
		array.push(currentNum);
	}
	console.log(array.join(' '));
}
distinctArr([ 20, 8, 12, 13, 4, 4, 8, 5 ]);
