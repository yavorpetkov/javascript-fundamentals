function factorialDivision(firstNum, secondNum) {
	let firstSum = 1;
	let secondSum = 1;
	for (let i = 1; i <= firstNum; i++) {
		firstSum *= i;
	}
	for (let j = 1; j <= secondNum; j++) {
		secondSum *= j;
	}
	console.log((firstSum / secondSum).toFixed(2));
}
factorialDivision(6, 2);
