function dungeonest(arr) {
	const rooms = arr.toString().split('|');
	let health = 100;
	let coins = 0;
	let roomsWon = 0;
	let alive = true;

	for (let i = 0; i < rooms.length; i++) {
		let booms = rooms[i].toString().split(' ');
		roomsWon++;
		if (booms[0] === 'chest') {
			coins += Number(booms[1]);
			console.log(`You found ${booms[1]} coins.`);
		} else if (booms[0] === 'potion') {
			if (health + Number(booms[1]) > 100) {
				booms[1] = 100 - health;
				health += Number(booms[1]);
			} else {
				health += Number(booms[1]);
			}
			console.log(`You healed for ${booms[1]} hp.`);
			console.log(`Current health: ${health} hp.`);
		} else {
			health -= Number(booms[1]);
			if (health > 0) {
				console.log(`You slayed ${booms[0]}.`);
			} else {
				console.log(`You died! Killed by ${booms[0]}.`);
				alive = false;
				break;
			}
		}
	}
	if (alive) {
		console.log("You've made it!");
		console.log(`Coins: ${coins}`);
		console.log(`Health: ${health}`);
	} else {
		console.log(`Best room: ${roomsWon}`);
	}
}
dungeonest([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]);
