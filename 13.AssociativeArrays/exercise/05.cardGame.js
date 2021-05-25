function cardGame(array) {
	let myMap = new Map();
	let playerArr = [];

	let cardPoints = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'10': 10,
		J: 11,
		Q: 12,
		K: 13,
		A: 14
	};
	let cardManipulator = {
		S: 4,
		H: 3,
		D: 2,
		C: 1
	};

	function sumPoints() {
		let allPlayers = new Set(playerArr);
		for (const player of allPlayers) {
			let cardHodler = new Set(myMap.get(player));
			let points = 0;
			for (const card of cardHodler) {
				let currentCard = card.split('');
				let multiplier = currentCard.pop();
				let point = currentCard.join('');
				points += cardPoints[point] * cardManipulator[multiplier];
			}
			myMap.set(player, points);
		}
	}

	for (const line of array) {
		let tokens = line.split(': ');
		let player = tokens[0];
		let cards = tokens[1].split(', ');
		playerArr.push(player);
		if (!myMap.has(player)) {
			myMap.set(player, []);
			myMap.set(player, myMap.get(player).concat(cards));
		} else {
			myMap.set(player, myMap.get(player).concat(cards));
		}
	}
	sumPoints();
	let totalPoints = Array.from(myMap);

	for (const [ player, points ] of totalPoints) {
		console.log(`${player}: ${points}`);
	}
}
cardGame([
	'Peter: 2C, 4H, 9H, AS, QS',
	'Tomas: 3H, 10S, JC, KD, 5S, 10S',
	'Andrea: QH, QC, QS, QD',
	'Tomas: 6H, 7S, KC, KD, 5S, 10C',
	'Andrea: QH, QC, JS, JD, JC',
	'Peter: JD, JD, JD, JD, JD, JD'
]);
