function objConvert(jsonStr) {
	let person = JSON.parse(jsonStr);
	for (const iterator of Object.keys(person)) {
		console.log(`${iterator}: ${person[iterator]}`);
	}
}
objConvert('{"name": "George", "age": 40, "town": "Sofia"}');
