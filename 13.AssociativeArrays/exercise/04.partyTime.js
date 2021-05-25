function partyTime(array) {
	const guestList = new Map();
	let partyTime = false;

	for (const code of array) {
		if (code === 'PARTY') {
			partyTime = true;
		} else if (!partyTime) {
			if (!guestList.has(code)) {
				guestList.set(code, code);
			}
		} else if (partyTime) {
			if (guestList.has(code)) {
				guestList.delete(code);
			}
		}
	}
	let sorted = Array.from(guestList).sort((a, b) => a[1][0] - b[1][0]);

	console.log(sorted.length);

	for (const [ key, value ] of sorted) {
		console.log(value);
	}
}
partyTime([
	'm8rfQBvl',
	'fc1oZCE0',
	'UgffRkOn',
	'7ugX7bm0',
	'9CQBGUeJ',
	'2FQZT3uC',
	'dziNz78I',
	'mdSGyQCJ',
	'LjcVpmDL',
	'fPXNHpm1',
	'HTTbwRmM',
	'B5yTkMQi',
	'8N0FThqG',
	'xys2FYzn',
	'MDzcM9ZK',
	'PARTY',
	'2FQZT3uC',
	'dziNz78I',
	'mdSGyQCJ',
	'LjcVpmDL',
	'fPXNHpm1',
	'HTTbwRmM',
	'B5yTkMQi',
	'8N0FThqG',
	'm8rfQBvl',
	'fc1oZCE0',
	'UgffRkOn',
	'7ugX7bm0',
	'9CQBGUeJ'
]);
