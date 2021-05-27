function race(players, stringArr) {
	let participants = players.split(', ');
	const sortPlayers = [];
	const nameGetter = /[^A-Za-z]+/g;
	const scoreGetter = /[^0-9]+/g;
	const playerPoints = {};

	for (const line of stringArr) {
		let points = line.replace(scoreGetter, '');
		let person = line.replace(nameGetter, '');

		if (!playerPoints[person]) {
			playerPoints[person] = 0;
		}
		if (participants.includes(person)) {
			for (let i = 0; i < points.length; i++) {
				playerPoints[person] += Number(points[i]);
			}
		}
	}

	for (const [ key, value ] of Object.entries(playerPoints)) {
		sortPlayers.push([ key, value ]);
	}

	sortPlayers.sort((a, b) => b[1] - a[1]);

	console.log(`1st place: ${sortPlayers[0][0]}`);
	console.log(`2nd place: ${sortPlayers[1][0]}`);
	console.log(`3rd place: ${sortPlayers[2][0]}`);
}
race('George, Peter, Bill, Tom', [
	'G4e@55or%6g6!68e!!@',
	'R1@!3a$y4456@',
	'B5@i@#123ll',
	'G@e54o$r6ge#',
	'7P%et^#e5346r',
	'T$o553m&6',
	'end of race'
]);
