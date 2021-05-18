function town(arr) {
	const city = {};
	for (let i = 0; i < arr.length; i++) {
		let [ theTown, theLatitude, theLongitude ] = arr[i].split(' | ');
		city.town = theTown;
		city.latitude = Number(theLatitude).toFixed(2);
		city.longitude = Number(theLongitude).toFixed(2);
		console.log(city);
	}
}
town([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ]);
