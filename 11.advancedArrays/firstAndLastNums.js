function firstAndLast(arr) {
	const elements = arr.shift();
	const firstArr = firtsEl(arr);
	const lastArr = lastEl(arr);
	function firtsEl(arr) {
		const newArr = [];
		for (let i = 0; i < elements; i++) {
			newArr.push(arr[i]);
		}
		return newArr;
	}
	function lastEl(arr) {
		const newArr = [];
		for (let i = arr.length - 1; i > arr.length - 1 - elements; i--) {
			newArr.unshift(arr[i]);
		}
		return newArr;
	}
	console.log(firstArr.join(' '));
	console.log(lastArr.join(' '));
}
firstAndLast([ 3, 6, 7, 8, 9 ]);
