function cone(radius, hight) {
	let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * hight;
	let slant = Math.sqrt(radius ** 2 + hight ** 2);
	let LateralArea = Math.PI * radius * slant;
	let baseArea = Math.PI * radius ** 2;
	let area = LateralArea + baseArea;
	console.log(`volume = ${volume.toFixed(4)}`);
	console.log(`area = ${area.toFixed(4)}`);
}
cone(3.3, 7.8);
