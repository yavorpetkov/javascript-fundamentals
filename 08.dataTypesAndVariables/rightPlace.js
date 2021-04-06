function rightPlace(str, char, result) {
	let res = str.replace(`_`, char);
	let outcome = res === result ? `Matched` : 'Not Matched';
	console.log(outcome);
}
rightPlace('Str_ng', 'i', 'String');
