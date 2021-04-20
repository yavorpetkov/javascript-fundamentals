function charsInRange(firstChar, secondChar) {
	const firstCode = firstChar.charCodeAt(0);
	const secondCode = secondChar.charCodeAt(0);
	const start = firstCode < secondCode ? firstCode : secondCode;
	const end = firstCode > secondCode ? firstCode : secondCode;
	const charArr = [];
	for (let i = start + 1; i < end; i++) {
		charArr.push(String.fromCharCode(i));
	}
	console.log(charArr.join(' '));
}
charsInRange('#', ':');
