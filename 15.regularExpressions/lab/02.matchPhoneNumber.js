function phoneNumber(numbers) {
	let checker = /\+\d{3}( |-)\d{1}\1\d{3}\1\d{4}\b/g;
	let validPhones = [];

	while ((validPhone = checker.exec(numbers)) !== null) {
		validPhones.push(validPhone[0]);
	}
	console.log(validPhones.join(', '));
}
phoneNumber(
	'+359 2 222 2222,359-2-222-2222, +359/2/222/2222\
    ,+359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
);
