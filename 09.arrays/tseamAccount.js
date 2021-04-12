function tseamAccount(arr) {
	let games = arr.shift().split(' ');
	for (let i = 0; arr[i] !== 'Play!'; i++) {
		let command = arr[i].split(' ');
		if (command[0] === 'Install') {
			if (games.includes(command[1])) {
			} else {
				games.push(command[1]);
			}
		} else if (command[0] === 'Uninstall') {
			if (games.includes(command[1])) {
				let position = games.indexOf(command[1]);
				games.splice(position, 1);
			}
		} else if (command[0] === 'Update') {
			if (games.includes(command[1])) {
				let position = games.indexOf(command[1]);
				games.splice(position, 1);
				games.push(command[1]);
			}
		} else if (command[0] === 'Expansion') {
			let expansion = command[1].split('-');
			if (games.includes(expansion[0])) {
				let position = games.indexOf(expansion[0]);
				games.splice(position + 1, 0, expansion.join(':'));
			}
		}
	}
	console.log(games.join(' '));
}
tseamAccount([ 'CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!' ]);
