function loadingBar(num) {
	const loadingBarArr = new Array(10);
	for (let i = 0; i < 100; i += 10) {
		if (i < num) {
			loadingBarArr.push('%');
		} else {
			loadingBarArr.push('.');
		}
	}
	if (num === 100) {
		console.log(`${num}% Complete!`);
		console.log(`[${loadingBarArr.join('')}]`);
	} else {
		console.log(`${num}% [${loadingBarArr.join('')}]`);
		console.log('Still loading...');
	}
}
loadingBar(30);
