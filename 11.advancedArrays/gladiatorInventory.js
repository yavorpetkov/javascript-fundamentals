function gladiatorInventory(arr) {
	let equipmentArr = arr.shift().split(' ');
	for (let i = 0; i < arr.length; i++) {
		let [ command, equipment ] = arr[i].split(' ');
		if (command === 'Buy') {
			if (equipmentArr.includes(equipment)) {
			} else {
				equipmentArr.push(equipment);
			}
		} else if (command === 'Trash') {
			if (equipmentArr.includes(equipment)) {
				let position = equipmentArr.indexOf(equipment);
				equipmentArr.splice(position, 1);
			}
		} else if (command === 'Repair') {
			if (equipmentArr.includes(equipment)) {
				let position = equipmentArr.indexOf(equipment);
				equipmentArr.splice(position, 1);
				equipmentArr.push(equipment);
			}
		} else if (command === 'Upgrade') {
			let expansion = equipment.split('-');
			if (equipmentArr.includes(expansion[0])) {
				let position = equipmentArr.indexOf(expansion[0]);
				equipmentArr.splice(position + 1, 0, expansion.join(':'));
			}
		}
	}
	console.log(equipmentArr.join(' '));
}
gladiatorInventory([ 'SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V' ]);
