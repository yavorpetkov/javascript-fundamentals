function diagonalAttack(arr) {
	let diagonal = 0;
	let length = arr.length - 1;
	let sum = 0;
	let sumOtherWay = 0;
	for (let j = 0; j < arr.length; j++) {
		diagonal = arr[j].split(' ');
		sum += Number(diagonal[j]);
		sumOtherWay += Number(diagonal[length - j]);
	}
	if (sum === sumOtherWay) {
		for (let l = 0; l <= length; l++) {
			let diagonalArr = new Array(arr.length).fill(sum);
			diagonal = arr[l].split(' ');
			diagonalArr[l] = Number(diagonal.slice(l, l + 1));
			diagonalArr[length - l] = Number(diagonal.slice(length - l, length - l + 1));
			console.log(diagonalArr.join(' '));
		}
	} else {
		for (let index = 0; index < arr.length; index++) {
			diagonal = arr[index].split(' ');
			console.log(diagonal.join(' '));
		}
	}
}
diagonalAttack([ '1 1 1', '1 1 1', '1 1 0' ]);
