function addAndRemove(arr) {
	newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'add') {
			newArr.push(i + 1);
		}

		if (arr[i] === 'remove') {
			newArr.pop();
		}
	}
	if (newArr.length === 0) {
		console.log('Empty');
	} else {
		console.log(newArr.join(' '));
	}
}
addAndRemove([ 'add', 'remove', 'remove', 'add', 'remove' ]);
