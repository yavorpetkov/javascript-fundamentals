function companyUsers(array) {
	const companyObj = {};
	for (const line of array) {
		let [ companyName, userId ] = line.split(' -> ');
		if (companyObj[companyName]) {
			let found = companyObj[companyName].find((el) => el === userId);
			if (!found) {
				companyObj[companyName].push(userId);
			}
		} else {
			companyObj[companyName] = [];
			companyObj[companyName].push(userId);
		}
	}
	let sorted = Object.entries(companyObj);
	sorted.sort(([ keyA ], [ keyB ]) => {
		return keyA.localeCompare(keyB);
	});
	for (const [ key, value ] of sorted) {
		console.log(key);
		for (const iterator of value) {
			console.log(`-- ${iterator}`);
		}
	}
}
companyUsers([
	'SoftUni -> AA12345',
	'SoftUni -> CC12344',
	'Lenovo -> XX23456',
	'SoftUni -> AA12345',
	'Movement -> DD11111'
]);
