function arrManipulator(arr, operators) {
	let j = 0;
	for (let i = 0; i < operators.length; i++) {
		let [ command, firstNum, seccondNum ] = operators[i].split(' ');
		firstNum = Number(firstNum);
		seccondNum = Number(seccondNum);
		if (command === 'add') {
			arr.splice(firstNum, 0, seccondNum);
		} else if (command === 'addMany') {
			seccondNum = operators[i].split(' ').slice(2, operators[i].length);
			arr.splice(firstNum, 0, seccondNum);
			arr = arr.flat();
			arr = arr.map(Number);
		} else if (command === 'contains') {
			console.log(arr.findIndex((el) => el === firstNum));
		} else if (command === 'remove') {
			arr.splice(firstNum, 1);
		} else if (command === 'shift') {
			arr.push(arr.shift());
		} else if (command === 'sumPairs') {
			arr = sumPairs(arr);
		} else if (command === 'print') {
			break;
		}
	}
	console.log(arr);
	function sumPairs(arr) {
		let newArr = new Array();
		for (let i = 0; i < arr.length / 2; i++) {
			newArr[i] = arr[j] + arr[j + 1];
			j += 2;
		}
		j = 0;
		return newArr;
	}
}
arrManipulator([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ], [ 'sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print' ]);
