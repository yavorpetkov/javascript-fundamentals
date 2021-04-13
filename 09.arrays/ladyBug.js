function ladyBug(arr) {
	let lengthOfArray = arr.shift();
	let positionOfBug = arr.shift().split(' ');
	const ladybugArr = new Array(lengthOfArray).fill(0);
	for (let index = 0; index < positionOfBug.length; index++) {
		ladybugArr[Number(positionOfBug[index])] = 1;
	}
	for (let i = 0; i < arr.length; i++) {
		let movement = arr[i].split(' ');
		let position = Number(movement[0]);

		for (let j = 0; j < lengthOfArray; j++) {
			if (movement[1] === 'right') {
				position += Number(movement[2]);
				if (ladybugArr[position] === 1) {
					position++;
					break;
				} else {
					break;
				}
			} else if (movement[1] === 'left') {
				position -= Number(movement[2]);
				if (ladybugArr[position] === 1) {
					position--;
				} else {
					break;
				}
			}
		}
		if (position >= lengthOfArray || position < 0) {
			position = 'a';
		}
		if (position !== 'a') {
			ladybugArr[position] = 1;
			if (position !== movement[0]) {
				ladybugArr[movement[0]] = 0;
			}
		} else if (position !== movement[0]) {
			ladybugArr[movement[0]] = 0;
		}
	}
	console.log(ladybugArr.join(' '));
}
ladyBug([ 5, '3', '3 left 2', '1 left -2' ]);
