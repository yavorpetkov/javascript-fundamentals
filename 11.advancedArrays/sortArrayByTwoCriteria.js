function sortCriteria(arr) {
	let sorted = arr.sort((a, b) => {
		if (a.length === b.length) return a.localeCompare(b);
		if (a.length > b.length) return 1;
		if (a.length < b.length) return -1;

		return 0;
	});
	for (let i = 0; i < sorted.length; i++) {
		console.log(sorted[i]);
	}
}
sortCriteria([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]);
