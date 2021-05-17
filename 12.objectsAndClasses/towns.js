function town(arr) {
	const city = {};
	for (let i = 0; i < arr.length; i++) {
		let [ theTown, theLatitude, theLongitude ] = arr[i].split(' | ');
		theLatitude = Number(theLatitude).toFixed(2);
		theLongitude = Number(theLongitude).toFixed(2);
		city.town = theTown;
		city.latitude = theLatitude;
		city.longitude = theLongitude;
		console.log(city);
	}
}
town([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ]);
