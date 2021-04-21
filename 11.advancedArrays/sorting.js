function sorting(arr) {
	let sorted = [];

	for (let i = 0; i < arr.length; ) {
		let biggest = arr.reduce(function(a, b) {
			return Math.max(a, b);
		});
		let smallest = arr.reduce(function(a, b) {
			return Math.min(a, b);
		});
		sorted.push(biggest);
		sorted.push(smallest);
		removeBiggest(arr, biggest);
		removeSmallest(arr, smallest);
	}
	console.log(sorted.join(' '));
}
sorting([ 1, 21, 3, 52, 69, 63, 31, 2, 18, 94 ]);

function removeBiggest(arr, biggest) {
	let placeOfIndex = (el) => el === biggest;
	let indexOfNum = arr.findIndex(placeOfIndex);
	arr.splice(indexOfNum, 1);
}
function removeSmallest(arr, smallest) {
	let placeOfIndex = (el) => el === smallest;
	let indexOfNum = arr.findIndex(placeOfIndex);
	arr.splice(indexOfNum, 1);
}
