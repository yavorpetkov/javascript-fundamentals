function arrManipulator(commands) {
	let arr = commands.shift().split(' ').map(Number);
	for (let i = 0; i < commands.length; i++) {
		let [ command, firstNum, secondNum ] = commands[i].split(' ');
		firstNum = Number(firstNum);
		secondNum = Number(secondNum);
		switch (command) {
			case 'Add':
				add(firstNum);
				break;
			case 'Remove':
				remove(firstNum);
				break;
			case 'RemoveAt':
				removeAt(firstNum);
				break;
			case 'Insert':
				insert(firstNum, secondNum);
				break;

			default:
				break;
		}
	}
	function add(firstNum) {
		arr.push(firstNum);
	}
	function remove(firstNum) {
		arr = arr.filter((el) => el !== firstNum);
	}
	function removeAt(firstNum) {
		arr.splice(firstNum, 1);
	}
	function insert(firstNum, secondNum) {
		arr.splice(secondNum, 0, firstNum);
	}

	console.log(arr.join(' '));
}
arrManipulator([ '4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3' ]);
