function fullName(string) {
	let checker = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
	let validNames = [];
	while ((validName = checker.exec(string)) !== null) {
		validNames.push(validName[0]);
	}
	console.log(validNames.join(', '));
}
fullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');
