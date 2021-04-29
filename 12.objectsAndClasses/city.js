function city(objArr) {
	let city = objArr;
	for (const key of Object.keys(city)) {
		console.log(`${key} -> ${city[key]}`);
	}
}
city({
	name: 'Sofia',
	area: 492,
	population: 1238438,
	country: 'Bulgaria',
	postCode: '1000'
});
