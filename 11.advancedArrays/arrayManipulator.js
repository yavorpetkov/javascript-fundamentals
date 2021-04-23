function arrManipulator(arr, operators) {
	for (let i = 0; i < operators.length; i++) {
		let [ command, firstNum, seccondNum ] = operators[i].split(' ');
		firstNum = Number(firstNum);
		seccondNum = Number(seccondNum);
		switch (command) {
			case 'add':
				add(firstNum, seccondNum);
				break;
			case 'addMany':
				addMany(firstNum, seccondNum, operators, i);
				break;
			case 'contains':
				contains(firstNum);
				break;
			case 'remove':
				remove(firstNum);
				break;
			case 'shift':
				shift(firstNum);
				break;
			case 'sumPairs':
				arr = sumPairs(arr);
				break;
			case 'print':
				print(arr);
				break;
			default:
				break;
		}
	}

	function add(index, element) {
		arr.splice(index, 0, element);
	}
	function addMany(index, element, operators, i) {
		element = operators[i].split(' ').slice(2, operators[i].length);
		arr.splice(index, 0, element);
		arr = arr.flat().map(Number);
	}
	function contains(element) {
		console.log(arr.findIndex((el) => el === element));
	}
	function remove(index) {
		arr.splice(index, 1);
	}
	function shift(count) {
		for (let i = 0; i < count; i++) {
			arr.push(arr.shift());
		}
	}
	function sumPairs(arr) {
		let j = 0;
		let newArr = new Array();
		for (let i = 0; i < arr.length / 2; i++) {
			newArr.push(arr[j] + arr[j + 1]);
			j += 2;
		}
		j = 0;
		return newArr;
	}
	function print(arr) {
		console.log(arr);
	}
}
arrManipulator([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ], [ 'sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print' ]);
