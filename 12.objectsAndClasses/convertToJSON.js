function JSONStr(name, lastName, hairColor) {
	let person = {
		name,
		lastName,
		hairColor
	};
	console.log(JSON.stringify(person));
}
JSONStr('George', 'Jones', 'Brown');
