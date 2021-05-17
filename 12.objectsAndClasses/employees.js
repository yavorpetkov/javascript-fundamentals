function employees(arr) {
	let employes = {};
	for (const name of arr) {
		employes[name] = name.length;
	}
	Object.entries(employes).forEach((el) => {
		console.log(`Name : ${el[0]} -- Personal Number: ${el[1]} `);
	});
}

employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);
