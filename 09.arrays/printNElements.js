function printElements(arr) {
	let n = Number(arr.pop());
	let newArr = [];
	for (let i = 0; i < arr.length; i += n) {
		newArr.push(arr[i]);
	}
	console.log(newArr.join(' '));
}
printElements([ 'dsa', 'asd', 'test', 'test', '2' ]);
