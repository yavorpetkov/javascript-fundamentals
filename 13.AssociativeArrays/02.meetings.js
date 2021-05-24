function meetings(array) {
	const calendar = {};
	for (const line of array) {
		let [ day, person ] = line.split(' ');

		if (calendar.hasOwnProperty(day)) {
			console.log(`Conflict on ${day}!`);
		} else {
			console.log(`Scheduled for ${day}`);
			calendar[day] = person;
		}
	}
	for (const [ day, person ] of Object.entries(calendar)) {
		console.log(`${day} -> ${person}`);
	}
}
meetings([ 'Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim' ]);
