function nxnMatrix(num) {
	const matrixNumArray = [];
	for (let i = 0; i < num; i++) {
		matrixNumArray.push(new Array(num));
		for (let j = 0; j < num; j++) {
			matrixNumArray[i][j] = num;
		}
		console.log(matrixNumArray[i].join(' '));
	}
}
nxnMatrix(3);
