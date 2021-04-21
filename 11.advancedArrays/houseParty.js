function houseParty(arr) {
	let list = [];
	for (let i = 0; i < arr.length; i++) {
		let currentPerson = arr[i].split(' is ');
		let findInList = (el) => el === currentPerson[0];
		if (currentPerson[1] === 'going!') {
			if (list.findIndex(findInList) !== -1) {
				console.log(`${currentPerson[0]} is already in the list!`);
			} else {
				list.push(currentPerson[0]);
			}
		} else if (currentPerson[1] === 'not going!') {
			if (list.findIndex(findInList) === -1) {
				console.log(`${currentPerson[0]} is not in the list!`);
			} else {
				list = removeFromList(list, currentPerson);
			}
		}
	}
	for (let j = 0; j < list.length; j++) {
		console.log(list[j]);
	}
}
houseParty([ 'Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!' ]);

function removeFromList(list, currentPerson) {
	let newList = list.filter((el) => el !== currentPerson[0]);
	return newList;
}
