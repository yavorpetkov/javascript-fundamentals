function train(commands) {
	const trainCarts = commands.shift().split(' ').map(Number);
	const maxPassengers = Number(commands.shift());
	for (let i = 0; i < commands.length; i++) {
		let command = commands[i].split(' ');
		if (command[0] === 'Add') {
			trainCarts.push(Number(command[1]));
		} else {
			for (let j = 0; j < trainCarts.length; j++) {
				let currentPassengers = trainCarts[j];
				if (currentPassengers + Number(command) <= maxPassengers) {
					trainCarts[j] += Number(command);
					break;
				}
			}
		}
	}
	console.log(trainCarts.join(' '));
}

train([ '0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6' ]);
