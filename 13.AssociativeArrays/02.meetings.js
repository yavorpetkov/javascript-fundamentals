function meetings(array) {
	const meeting = {};
	const alreadyPassed = [];
	for (const line of array) {
		let [ day, person ] = line.split(' ');
		let sameDayMeeting = (el) => el === day;
		let notSameDay = alreadyPassed.findIndex(sameDayMeeting);
		if (notSameDay !== -1) {
			console.log(`Conflict on ${day}!`);
		} else {
			console.log(`Scheduled for ${day}`);
			meeting[day] = person;
		}
		alreadyPassed.push(day);
	}
	for (const iterator of Object.entries(meeting)) {
		console.log(`${iterator[0]} -> ${iterator[1]}`);
	}
}
meetings([ 'Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim' ]);
